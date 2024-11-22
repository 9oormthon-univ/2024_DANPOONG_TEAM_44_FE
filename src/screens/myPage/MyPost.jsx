import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import useHideBottomTabs from '../../hooks/useHideBottomTabs';
import CommunityItem from '../../components/community/CommunityItem';
import { posts } from '../../constants/mockData';

function MyPost() {
  const navigation = useNavigation();

  useHideBottomTabs(navigation);

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
