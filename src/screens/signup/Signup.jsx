import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Config from 'react-native-config';

function Signup() {
  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      const response = await fetch(`http://${Config.SERVER_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          loginId: '아이디',
          username: '이름',
          password: '비밀번호',
          email: '이메일',
          sido: '입력한 시/도',
          sigungu: '입력한 시/군/구',
          roadname: '입력한 도로명',
        }),
      });

      if (response.ok) {
        Alert.alert('회원가입 성공', '회원가입이 완료되었습니다.');
        navigation.navigate('Login'); // 로그인 화면으로 이동
      } else {
        throw new Error('회원가입 실패');
      }
    } catch (error) {
      console.error('회원가입 오류:', error);
      Alert.alert('오류', '회원가입 중 문제가 발생했습니다.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>로그인 정보</Text>

      <TextInput
        style={styles.input}
        placeholder="아이디"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        placeholderTextColor="#999"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="이메일"
        placeholderTextColor="#999"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>완료(3/3)</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Signup;

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
    marginTop: 50,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF', // 파란색 버튼
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '87%',
    marginTop: 110,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
