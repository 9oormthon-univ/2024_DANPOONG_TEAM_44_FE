import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import ImageSlider from '../../components/community/ImageSlider';
import useHideBottomTabs from '../../hooks/useHideBottomTabs';
import { formatDateToSlash } from '../../utils/DateUtils';
import { UserMiddle } from '../../assets/icons/iconSvg';
import { posts } from '../../constants/mockData';

function ViewPost() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params || {};

  const post = posts.find(item => item.id === id);

  if (!post) {
    return (
      <SafeAreaView style={styles.container}>
        <Header showBackButton={true} onBackPress={() => navigation.goBack()} />
        <View style={styles.errorContainer}>
          <Text>Error : 게시물을 찾을 수 없습니다.</Text>
        </View>
      </SafeAreaView>
    );
  }

  useHideBottomTabs(navigation);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header showBackButton={true} onBackPress={() => navigation.goBack()} />
        <ImageSlider images={post.images} />

        <View style={styles.contentContainer}>
          <View style={styles.infoSection}>
            <UserMiddle />
            <View style={styles.authorInfo}>
              <Text style={styles.authText}>{post.authorName}</Text>
              <View style={styles.dateLocationRow}>
                <Text style={styles.dateText}>
                  {formatDateToSlash(post.createdDate)}
                </Text>
                <Text style={styles.locationText}>{post.location}</Text>
              </View>
            </View>
          </View>

          <View style={styles.contentPlaceholder}>
            <Text style={styles.titleText}>{post.title}</Text>
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
    </SafeAreaView>
  );
}

export default ViewPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 32,
    paddingTop: 28,
  },
  infoSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorInfo: {
    marginLeft: 10,
    flex: 1,
  },
  authText: {
    fontSize: 20,
    color: '#3F3F3F',
    marginBottom: 4,
  },
  dateLocationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 14,
    color: '#585858',
  },
  locationText: {
    fontSize: 14,
    color: '#585858',
    textAlign: 'right',
  },
  contentPlaceholder: {
    minHeight: 100,
    paddingTop: 20,
    paddingBottom: 42,
  },
  titleText: {
    fontSize: 24,
    color: '#3F3F3F',
    marginBottom: 20,
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
