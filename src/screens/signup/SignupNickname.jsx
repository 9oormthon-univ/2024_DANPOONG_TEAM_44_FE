import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

function Signupnickname() {
  const navigation = useNavigation();

  const [nickname, setNickname] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // 닉네임 중복 검사 함수
  const checkNickname = () => {
    const existingNicknames = ['user1', 'test123', 'nickname']; // 중복된 닉네임 예시 데이터

    if (existingNicknames.includes(nickname)) {
      setErrorMessage('중복되는 이름이나 닉네임을 사용할 수 없습니다.');
    } else {
      setErrorMessage('');
      navigation.navigate('SignupArea'); // 관심 지역 화면으로 이동
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>이름</Text>

      <TextInput
        style={styles.input}
        placeholder="본명이나 닉네임을 입력하세요."
        placeholderTextColor="#999"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignupArea')}
      >
        <Text style={styles.buttonText}>다음(1/3)</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Signupnickname;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center', // 자식 요소 수평 중앙 정렬
  },
  label: {
    fontSize: 32,
    // fontWeight: 'bold',
    color: '#000',
    marginBottom: 100,
    marginLeft: 30,
    alignSelf: 'flex-start',
  },
  input: {
    borderBottomWidth: 1, // textfield 밑줄
    width: '87%',
    borderBottomColor: '#868686',
    fontSize: 20,
    paddingVertical: 10,
    marginBottom: 50,
    marginTop: 100,
    color: '#333',
    alignContent: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007AFF', // 파란색 버튼
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '87%',
    marginBottom: -20,
    marginTop: 200,
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
