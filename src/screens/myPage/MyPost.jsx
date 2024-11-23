import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import useHideBottomTabs from '../../hooks/useHideBottomTabs';
import CommunityItem from '../../components/community/CommunityItem';
import { requestGetFetch } from '../../services/apiService';

function MyPost() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useHideBottomTabs(navigation);

  const fetchUserInfo = async () => {
    try {
      const response = await requestGetFetch('/userInfo');
      if (response.username) {
        setUsername(response.username);
      } else {
        console.error('유저네임 정보가 없습니다:', response);
      }
    } catch (error) {
      console.error('사용자 정보 가져오기 실패:', error);
    }
  };

  const fetchPosts = async username => {
    try {
      const response = await requestGetFetch(
        `/posts/my-posts?username=${username}&page=0&size=10`,
      );
      if (response.success) {
        setPosts(response.data.content);
      } else {
        console.error('게시물 가져오기 실패:', response);
      }
    } catch (err) {
      console.error('게시물 가져오기 오류:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const initialize = async () => {
      await fetchUserInfo();
    };
    initialize();
  }, []);

  useEffect(() => {
    if (username) {
      fetchPosts(username);
    }
  }, [username]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0080FF" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <Header
          title="내가 쓴 글"
          showBackButton={true}
          onBackPress={() => navigation.goBack()}
        />
        {posts.map(item => (
          <CommunityItem
            key={item.id}
            item={item}
            showAuthor={false}
            onPress={() => navigation.navigate('ViewPost', { id: item.id })}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default MyPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listContainer: {
    paddingTop: 3,
    paddingBottom: 5,
  },
});
