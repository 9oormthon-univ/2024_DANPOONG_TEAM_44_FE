import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ImageSlider from '../../components/community/ImageSlider';
import useHideBottomTabs from '../../hooks/useHideBottomTabs';
import { formatDateToSlash } from '../../utils/DateUtils';
import { posts } from '../../constants/mockData';

function ViewPost() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params || {};

  const post = posts.find(item => item.id === id);

  if (!post) {
    return (
      <View style={styles.container}>
        <Text>Error : 게시물을 찾을 수 없습니다.</Text>
      </View>
    );
  }

  useHideBottomTabs(navigation);

  return (
    <ScrollView style={styles.container}>
      <ImageSlider images={post.images} />

      <View style={styles.contentContainer}>
        <View style={styles.infoSection}>
          <Text style={styles.authText}>{post.authorName}</Text>
          <Text style={styles.dateText}>
            {formatDateToSlash(post.createdDate)} {'  '} {post.location}
          </Text>
        </View>

        <View style={styles.contentPlaceholder}>
          <Text style={styles.contentText}>{post.content}</Text>
        </View>

        <View style={[styles.kakaoMap, styles.kakaoText]}>
          <Text>카카오 맵</Text>
        </View>

        <TouchableOpacity
          style={styles.connectButton}
          onPress={() =>
            navigation.navigate('Chat', { id, author: post.authorName })
          }
        >
          <Text style={styles.connectButtonText}>사용자와 연결</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default ViewPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 32,
    paddingTop: 28,
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  authText: {
    fontSize: 20,
    color: '#868686',
  },
  dateText: {
    fontSize: 14,
    color: '#868686',
  },
  contentPlaceholder: {
    minHeight: 100,
    paddingTop: 20,
    paddingBottom: 42,
  },
  contentText: {
    fontSize: 16,
    color: '#868686',
  },
  kakaoMap: {
    height: 130,
    backgroundColor: '#D9D9D9',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  kakaoText: {
    fontSize: 16,
    color: '#000000',
  },
  connectButton: {
    height: 48,
    backgroundColor: '#0080FF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  connectButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
