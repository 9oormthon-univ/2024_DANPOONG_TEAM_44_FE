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
  const [username, setUsername] = useState('');

  const handleNext = () => {
    if (!username.trim()) {
      alert('닉네임을 입력해주세요!');
      return;
    }

    // 닉네임을 다음 화면으로 전달
    navigation.navigate('SignupArea', { username });
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
      <TouchableOpacity style={styles.button} onPress={handleNext}>
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
