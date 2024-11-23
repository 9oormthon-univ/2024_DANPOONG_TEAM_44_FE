import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
// import Config from 'react-native-config';

function Signup() {
  const navigation = useNavigation();
  const route = useRoute();
  const { username, city, district, roadname } = route.params;
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch(`http://52.78.38.237/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          loginId,
          username,
          password,
          email,
          sido: city,
          sigungu: district,
          roadname,
        }),
      });

      if (response.ok) {
        Alert.alert('회원가입 성공', '회원가입이 완료되었습니다.');
        navigation.navigate('Login'); // 로그인 화면으로 이동
      } else {
        const errorText = await response.text();
        console.error('회원가입 실패:', errorText);
        Alert.alert('회원가입 실패', errorText);
      }
    } catch (error) {
      console.log(loginId);
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
        onChangeText={setLoginId}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        placeholderTextColor="#999"
        secureTextEntry
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="이메일"
        placeholderTextColor="#999"
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>완료(3/3)</Text>
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
