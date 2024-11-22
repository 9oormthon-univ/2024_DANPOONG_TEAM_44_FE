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

function SignupArea() {
  const navigation = useNavigation();
  const route = useRoute();

  // 이전 화면에서 전달된 닉네임
  const { username } = route.params || {};

  // 현재 화면에서 입력받을 데이터
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [roadname, setRoadname] = useState('');

  const handleNext = () => {
    // 유효성 검사
    if (!city || !district || !roadname) {
      Alert.alert('오류', '모든 항목을 입력해주세요.');
      return;
    }

    // Signup 화면으로 데이터 전달
    navigation.navigate('Signup', {
      username,
      city,
      district,
      roadname,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>관심지역</Text>

      <TextInput
        style={styles.input}
        placeholder="광역시/도"
        placeholderTextColor="#999"
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="시/군/구"
        placeholderTextColor="#999"
        onChangeText={setDistrict}
      />
      <TextInput
        style={styles.input}
        placeholder="도로명"
        placeholderTextColor="#999"
        onChangeText={setRoadname}
      />

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>다음(2/3)</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default SignupArea;

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
    marginRight: 200,
    marginLeft: 30,
    alignSelf: 'flex-start',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#868686',
    fontSize: 20,
    paddingVertical: 10,
    width: '87%',
    marginTop: 50,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
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
