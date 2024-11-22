import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Config from 'react-native-config';

function Login() {
  const navigation = useNavigation();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch(`${Config.SERVER_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ loginId: id, password: password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('로그인 성공:', data);

        // 로그인 성공 처리
        Alert.alert('로그인 성공', `환영합니다, ${data.username}!`);
        navigation.navigate('Home'); // 홈 화면으로 이동
      } else if (response.status === 401) {
        // 인증 실패 처리
        setErrorMessage('아이디 또는 비밀번호가 잘못되었습니다.');
      } else {
        throw new Error('서버 오류');
      }
    } catch (error) {
      console.error('로그인 오류:', error);
      Alert.alert('오류', '로그인 요청 중 문제가 발생했습니다.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>로그인</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="아이디"
          placeholderTextColor="#4D4D4D"
          value={id}
          onChangeText={setId}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="패스워드"
          placeholderTextColor="#4D4D4D"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    // <SafeAreaView>
    flex: 1, // 화면 전체 차지
    backgroundColor: '#fff', // 배경색
    alignItems: 'center', // 자식 요소 수평 중앙 정렬
    justifyContent: 'center', // 자식 요소 수직 중앙 정렬
    paddingHorizontal: 30, // 좌우 여백 20
  },
  header: {
    // <View> 로그인 타이틀 포함
    marginBottom: 90, // 제목 아래 여백 추가, 입력 필드와 간격 넓힘
  },
  title: {
    // <Text> 제목텍스트
    alignSelf: 'flex-start',
    fontSize: 24, // 폰트 크기
    // fontWeight: 'bold', // 굵기
    color: '#000', // 글씨 색상
  },
  inputContainer: {
    // 입력 필드 <View>
    width: '87%', // 필드가 화면 너비 차지
    height: 48, // 필트 높이
    marginBottom: 47, // 아래 여백 추가, 필드 간 간격
    paddingHorizontal: 15, // 좌우 15여백 추가
    borderBottomWidth: 1, // textfield 밑줄
    borderBottomColor: '#868686',
    fontSize: 16,
    paddingVertical: 10,
    marginTop: 30,
    color: '#333',
  },
  input: {
    // <TextInput>
    fontSize: 16, // 폰트 크기
    color: '#4D4D4D', // 텍스트 색상
  },
  button: {
    // 로그인 버튼을 감싸는 <TouchableOpacity>
    width: '87%', // 버튼 화면 너비 차지
    backgroundColor: '#007AFF', // 버튼 배경색
    paddingVertical: 15, // 버튼 위아래 내부 여백 추가, 버튼 높이 설정
    borderRadius: 30, // r값
    alignItems: 'center', // 버튼 텍스트 중앙정렬
    marginTop: 150, // 버튼 위쪽 여백
  },
  buttonText: {
    // 버튼 내부의 텍스트 <Text>
    color: '#fff', // 텍스트 색
    fontSize: 16, // 폰트 크기
    fontWeight: '600', // 굵기
  },
});
