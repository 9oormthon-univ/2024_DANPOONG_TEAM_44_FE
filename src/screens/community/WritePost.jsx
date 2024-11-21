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
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import {
  UploadGIcon,
  UploadBIcon,
  PlaceGIcon,
  PlaceBIcon,
} from '../../assets/icons/iconSvg';
import Header from '../../components/common/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import useHideBottomTabs from '../../hooks/useHideBottomTabs';

function WritePost() {
  const navigation = useNavigation();
  const [fileData, setFileData] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isLocationUploaded, setIsLocationUploaded] = useState(false);

  useHideBottomTabs(navigation);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('사진 업로드를 위해 권한이 필요합니다.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      if (result.assets.length > 2) {
        alert('사진은 최대 2개까지만 선택할 수 있습니다.');
        return;
      }

      const newFileData = await Promise.all(
        result.assets.map(async asset => {
          const base64Content = await FileSystem.readAsStringAsync(asset.uri, {
            encoding: FileSystem.EncodingType.Base64,
          });

          return {
            fileName: asset.uri.split('/').pop(),
            fileContent: base64Content,
          };
        }),
      );

      setFileData(newFileData);
      setIsUploaded(true);
    }
  };

  const resetSelectionAndPickImage = async () => {
    setFileData([]);
    setIsUploaded(false);
    await pickImage();
  };

  const uploadLocation = () => {
    // 임시
    setIsLocationUploaded(true);
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
          <TextInput style={styles.input} placeholder="글 제목" />
          <TextInput
            style={styles.contentInput}
            placeholder="내용을 입력하세요."
            multiline
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
              onPress={uploadLocation}
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

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => navigation.navigate('Community')}
          >
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
