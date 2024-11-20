import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Signup() {
  const navigation = useNavigation();

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
