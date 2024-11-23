import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import useHideBottomTabs from '../../hooks/useHideBottomTabs';
import { requestPatchFetch } from '../../services/apiService';

function AreaSetting() {
  const navigation = useNavigation();
  const [sido, setSido] = useState('');
  const [sigungu, setSigungu] = useState('');
  const [roadname, setRoadname] = useState('');

  useHideBottomTabs(navigation);

  const handleUpdate = async () => {
    const requestBody = { sido, sigungu, roadname };

    try {
      const response = await requestPatchFetch('/changeLocation', requestBody);

      if (
        typeof response === 'string' &&
        response.includes('성공적으로 업데이트되었습니다')
      ) {
        navigation.navigate('MyPage');
      } else {
        console.error('업데이트 실패: 예상하지 못한 서버 응답');
      }
    } catch (error) {
      console.error('지역 정보 업데이트 실패:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header showBackButton={true} onBackPress={() => navigation.goBack()} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.label}>관심지역 :</Text>

          <TextInput
            style={styles.input}
            placeholder="광역시/도"
            placeholderTextColor="#868686"
            value={sido}
            onChangeText={setSido}
          />
          <TextInput
            style={styles.input}
            placeholder="시/군/구"
            placeholderTextColor="#868686"
            value={sigungu}
            onChangeText={setSigungu}
          />
          <TextInput
            style={styles.input}
            placeholder="도로명"
            placeholderTextColor="#868686"
            value={roadname}
            onChangeText={setRoadname}
          />

          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.buttonText}>수정하기</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default AreaSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  label: {
    fontSize: 30,
    color: '#000000',
    marginLeft: 20,
    fontFamily: 'SpoqaHanSansNeo-Medium',
    alignSelf: 'flex-start',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#868686',
    fontSize: 14,
    fontFamily: 'SpoqaHanSansNeo-Regular',
    paddingBottom: 14,
    width: '87%',
    marginTop: 60,
    color: '#333',
  },
  button: {
    backgroundColor: '#0080FF',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: 180,
    marginTop: 150,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'SpoqaHanSansNeo-Regular',
    fontSize: 16,
  },
});
