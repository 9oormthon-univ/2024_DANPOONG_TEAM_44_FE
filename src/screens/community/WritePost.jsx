import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { pickImage } from '../../utils/imageUtils';
import {
  UploadGIcon,
  UploadBIcon,
  PlaceGIcon,
  PlaceBIcon,
} from '../../assets/icons/iconSvg';
import Header from '../../components/common/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import useHideBottomTabs from '../../hooks/useHideBottomTabs';
import {
  requestGetFetch,
  requestPutFetch,
  requestPostFetch,
} from '../../services/apiService';

function WritePost() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params || {};

  const [fileData, setFileData] = useState([]);
  const [, setSelectedLocationId] = useState(null);
  const [selectedLatitude, setSelectedLatitude] = useState(null);
  const [selectedLongitude, setSelectedLongitude] = useState(null);
  const [selectedRoadAddress, setSelectedRoadAddress] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isLocationUploaded, setIsLocationUploaded] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useHideBottomTabs(navigation);

  // 게시물 데이터를 불러와 초기값 설정
  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        try {
          const response = await requestGetFetch(`/posts/${id}`);
          if (response.success) {
            const post = response.data;
            setTitle(post.title);
            setContent(post.content);
            setSelectedLatitude(post.latitude);
            setSelectedLongitude(post.longitude);
            setSelectedRoadAddress(post.domain);

            if (post.latitude || post.longitude || post.domain) {
              setIsLocationUploaded(true);
            }

            if (post.imageFileData) {
              setFileData(
                post.imageFileData.map((file, index) => ({
                  fileName: `image_${index}`,
                  fileContent: file,
                })),
              );
              setIsUploaded(true);
            }
          }
        } catch (error) {
          console.error('Error occurred:', error);
        }
      }
    };

    fetchPost();
  }, [id]);

  // 이미지 초기화 및 새 업로드
  const resetSelectionAndPickImage = async () => {
    setFileData([]);
    setIsUploaded(false);
    await pickImage(setFileData, setIsUploaded);
  };

  // 위치 초기화 및 새 업로드
  const resetLocationAndUpload = () => {
    setSelectedLocationId(null);
    setSelectedLatitude(null);
    setSelectedLongitude(null);
    setSelectedRoadAddress(null);
    setIsLocationUploaded(false);

    navigation.navigate('PlaceUpload', {
      onSelect: ({ id, latitude, longitude, roadAddress }) => {
        setSelectedLocationId(id);
        setSelectedLatitude(latitude);
        setSelectedLongitude(longitude);
        setSelectedRoadAddress(roadAddress);
        setIsLocationUploaded(true);
      },
    });
  };

  const handleSubmit = async () => {
    const representativeFile = fileData.length > 0 ? fileData[0] : null;

    const postData = {
      title: title.trim(),
      content: content.trim(),
      latitude: selectedLatitude || null,
      longitude: selectedLongitude || null,
      domain: selectedRoadAddress || null,
      fileData: fileData.map(file => ({
        fileName: file.fileName,
        fileContent: file.fileContent,
      })),
      representativeFileData: representativeFile
        ? {
            fileName: representativeFile.fileName,
            fileContent: representativeFile.fileContent,
          }
        : {
            fileName: 'default.jpg',
            fileContent: 'DEFAULT_BASE64_ENCODED_DATA',
          },
    };

    if (id) {
      postData.postId = id;
    }

    try {
      const response = id
        ? await requestPutFetch('/posts', postData)
        : await requestPostFetch('/posts', postData);

      if (response.success) {
        navigation.navigate('Community');
      }
    } catch (error) {
      /* empty */
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header showBackButton={true} onBackPress={() => navigation.goBack()} />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <TextInput
            style={styles.input}
            placeholder="글 제목"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.contentInput}
            placeholder="내용을 입력하세요."
            multiline
            value={content}
            onChangeText={setContent}
          />

          <View style={styles.uploadContainer}>
            <TouchableOpacity
              style={[
                styles.uploadButton,
                isUploaded && styles.uploadButtonActive,
              ]}
              onPress={resetSelectionAndPickImage}
            >
              {isUploaded ? <UploadBIcon /> : <UploadGIcon />}
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.uploadButton,
                isLocationUploaded && styles.uploadButtonActive,
              ]}
              onPress={resetLocationAndUpload}
            >
              {isLocationUploaded ? <PlaceBIcon /> : <PlaceGIcon />}
            </TouchableOpacity>
          </View>

          <View style={styles.noticeContainer}>
            <Text style={styles.noticeTitle}>이미지 업로드 시 주의사항</Text>
            <Text style={styles.noticeText}>
              글 작성시에는 이미지 파일과 위치 정보 업데이트가 필요합니다.
              이미지 파일의 경우 ‘ 등기부 등본 ‘ 과 ‘ 건축물 대장 표제부 ‘ 를
              업로드 해야하며 위치 정보는 거래하고자 하는 매물의 위치를 추가해야
              합니다.
            </Text>
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>작성완료</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default WritePost;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  input: {
    fontSize: 20,
    width: '100%',
    color: '#3F3F3F',
    borderBottomWidth: 1,
    borderBottomColor: '#868686',
    fontFamily: 'SpoqaHanSansNeo-Regular',
    paddingBottom: 14,
    marginBottom: 26,
  },
  contentInput: {
    width: '100%',
    height: 220,
    color: '#3F3F3F',
    fontFamily: 'SpoqaHanSansNeo-Regular',
    fontSize: 16,
    textAlignVertical: 'top', // Android
    marginBottom: 32,
    backgroundColor: '#FFFFFF',
  },
  noticeContainer: {
    width: '100%',
    backgroundColor: '#F7F7F8',
    borderRadius: 12,
    padding: 16,
    marginBottom: 40,
  },
  noticeTitle: {
    fontSize: 14,
    color: '#0080FF',
    fontFamily: 'SpoqaHanSansNeo-Regular',
    marginBottom: 8,
  },
  noticeText: {
    fontSize: 10,
    fontFamily: 'SpoqaHanSansNeo-Regular',
    color: '#868686',
  },
  uploadContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 13,
  },
  uploadButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F7F7F8',
    borderRadius: 10,
    width: '45%',
    height: 90,
  },
  uploadButtonActive: {
    backgroundColor: '#DFEDFF',
  },
  submitButton: {
    width: 180,
    backgroundColor: '#0080FF',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 32,
  },
  submitText: {
    color: '#FFFFFF',
    fontFamily: 'SpoqaHanSansNeo-Regular',
    opacity: 0.9,
    fontSize: 16,
  },
});
