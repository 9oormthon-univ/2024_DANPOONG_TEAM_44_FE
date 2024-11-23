import React, { useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
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
import { requestPostFetch } from '../../services/apiService';

function WritePost() {
  const navigation = useNavigation();
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

  const resetSelectionAndPickImage = async () => {
    setFileData([]);
    setIsUploaded(false);
    await pickImage(setFileData, setIsUploaded);
  };

  const handleLocationUpload = () => {
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
      title,
      content,
      latitude: selectedLatitude,
      longitude: selectedLongitude,
      domain: selectedRoadAddress,
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
    try {
      const response = await requestPostFetch('/posts', postData);
      console.log('게시물 생성 성공:', response);
      navigation.navigate('Community');
    } catch (error) {
      console.log('postData:', postData);
      console.error('게시물 생성 실패:', error);
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
              onPress={handleLocationUpload}
            >
              {isLocationUploaded ? <PlaceBIcon /> : <PlaceGIcon />}
            </TouchableOpacity>
          </View>

          <View style={styles.noticeContainer}>
            <Text style={styles.noticeTitle}>이미지 업로드 시 주의사항!</Text>
            <Text style={styles.noticeText}>
              : ex. 이미지는 최대 2개 업로드 가능
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
    paddingBottom: 14,
    marginBottom: 26,
  },
  contentInput: {
    width: '100%',
    height: 220,
    color: '#3F3F3F',
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
    fontSize: 16,
    color: '#0080FF',
    marginBottom: 8,
  },
  noticeText: {
    fontSize: 15,
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
    height: 100,
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
    opacity: 0.9,
    fontSize: 16,
  },
});
