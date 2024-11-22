import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Config from 'react-native-config';

function Signupnickname() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // 닉네임 중복 검사 함수
  const checkNickname = async () => {
    try {
      const response = await fetch(`http://${Config.SERVER_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
      });
      console.log('응답 상태:', response.status);

      if (response.ok) {
        const result = await response.json();
        if (result.isAvailable) {
          setErrorMessage('');
          navigation.navigate('SignupArea', { username });
        } else {
          setErrorMessage('중복되는 닉네임입니다. 다른 닉네임을 입력해주세요.');
        }
      } else {
        throw new Error('서버 오류');
      }
    } catch (error) {
      console.error('닉네임 중복 확인 오류:', error);
      Alert.alert('오류', '닉네임 중복 확인 중 문제가 발생했습니다.');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>이름</Text>

      <TextInput
        style={styles.input}
        placeholder="본명이나 닉네임을 입력하세요."
        placeholderTextColor="#999"
        onChangeText={setUsername}
      />
      <TouchableOpacity style={styles.button} onPress={checkNickname}>
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
