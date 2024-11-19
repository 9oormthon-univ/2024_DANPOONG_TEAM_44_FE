import React from 'react';
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
import { UploadGIcon, PlaceGIcon } from '../../assets/icons/iconSvg';
import useHideBottomTabs from '../../hooks/useHideBottomTabs';

function WritePost() {
  const navigation = useNavigation();

  useHideBottomTabs(navigation);

  return (
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
          <TouchableOpacity style={styles.uploadButton}>
            <UploadGIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadButton}>
            <PlaceGIcon />
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
  );
}

export default WritePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 32,
    paddingBottom: 60,
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
  uploadText: {
    fontSize: 16,
    color: '#868686',
    marginTop: 12,
  },
  imageText: {
    fontSize: 16,
    color: '#868686',
    marginTop: 24,
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
