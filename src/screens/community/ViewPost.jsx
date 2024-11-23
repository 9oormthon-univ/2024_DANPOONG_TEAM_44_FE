import React, { useState, useEffect } from 'react';
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
import {
  UserMiddle,
  OptionIcon,
  OptionLIcon,
} from '../../assets/icons/iconSvg';
import DropdownMenu from '../../components/common/DropdownMenu';
import DeletePost from '../../components/modal/DeletePost';
import { requestGetFetch, requestDeleteFetch } from '../../services/apiService';

function ViewPost() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params || {};

  const [post, setPost] = useState(null);
  const [username, setUsername] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useHideBottomTabs(navigation);

  const fetchPostDetail = async () => {
    try {
      const response = await requestGetFetch(`/posts/${id}`);
      if (response.success) {
        setPost(response.data);
      }
    } catch (error) {
      console.error('게시물 상세 데이터 가져오기 실패:', error);
    }
  };

  const fetchUserInfo = async () => {
    try {
      const response = await requestGetFetch('/userInfo');
      setUsername(response.username);
    } catch (error) {
      console.error('사용자 정보 가져오기 실패:', error);
    }
  };

  useEffect(() => {
    fetchPostDetail();
    fetchUserInfo();
  }, [id]);

  if (!post) {
    return (
      <SafeAreaView style={styles.container}>
        <Header showBackButton={true} onBackPress={() => navigation.goBack()} />
        <View style={styles.errorContainer}>
          <Text>게시물을 불러오는 중입니다...</Text>
        </View>
      </SafeAreaView>
    );
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleEdit = () => {
    navigation.navigate('WritePost', { id });
    setShowDropdown(false);
  };

  const handleDelete = async () => {
    setShowDropdown(false);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      setShowDeleteModal(false);
      const response = await requestDeleteFetch(`/posts/${id}`);
      if (response.success) {
        navigation.navigate('Community');
      } else {
        throw new Error('삭제 실패');
      }
    } catch (error) {
      console.error('게시물 삭제 실패:', error);
    }
  };

  const rightIcons =
    post.authorName === username
      ? [
          {
            icon: showDropdown ? OptionLIcon : OptionIcon,
            onPress: toggleDropdown,
          },
        ]
      : [];

  const images =
    post.imageFileData && post.imageFileData.length > 0
      ? post.imageFileData
      : null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header
          showBackButton={true}
          onBackPress={() => navigation.goBack()}
          rightIcons={rightIcons}
        />
        {showDropdown && (
          <DropdownMenu
            onEdit={handleEdit}
            onDelete={handleDelete}
            onClose={() => setShowDropdown(false)}
          />
        )}
        {images ? (
          <ImageSlider images={images} />
        ) : (
          <View style={styles.placeholderImage}>
            <Text style={styles.placeholderText}>No Images</Text>
          </View>
        )}

        <View style={styles.contentContainer}>
          <View style={styles.infoSection}>
            <UserMiddle />
            <View style={styles.authorInfo}>
              <Text style={styles.authText}>{post.authorName || '익명'}</Text>
              <View style={styles.dateLocationRow}>
                <Text style={styles.dateText}>
                  {formatDateToSlash(post.createdDate)}
                </Text>
                <Text style={styles.locationText}>
                  {post.domain || '위치 정보 없음'}
                </Text>
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

          {post.authorName !== username && (
            <TouchableOpacity
              style={styles.connectButton}
              onPress={() =>
                navigation.navigate('Chat', { id, author: post.authorName })
              }
            >
              <Text style={styles.connectButtonText}>사용자와 연결</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>

      <DeletePost
        visible={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onLeave={confirmDelete}
      />
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
  placeholderImage: {
    height: 200,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 8,
  },
  placeholderText: {
    fontSize: 16,
    color: '#868686',
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
