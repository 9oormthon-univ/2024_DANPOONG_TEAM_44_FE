import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function BuildingRegister() {
  const navigation = useNavigation();
  const [address, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [bun, setBlock] = useState('');
  const [ji, setLot] = useState('');

  const handleSearch = () => {
    if (!address || !district) {
      alert('시/군/구와 동/읍/면은 필수 입력 항목입니다.');
      return;
    }

    // 번과 지 값이 없을 경우 0으로 처리
    const formattedBun = bun.trim() === '' ? '0000' : bun;
    const formattedJi = ji.trim() === '' ? '0000' : ji;

    // 데이터 확인
    console.log({
      city: address,
      district,
      block: formattedBun,
      lot: formattedJi,
    });

    navigation.navigate('BuildingInfo', {
      city: address,
      district,
      block: formattedBun,
      lot: formattedJi,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>건축물대장 표제부</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="시/군/구"
          placeholderTextColor="#B0B0B0"
          value={address}
          onChangeText={setCity}
        />
        <TextInput
          style={styles.input}
          placeholder="동/읍/면"
          placeholderTextColor="#B0B0B0"
          value={district}
          onChangeText={setDistrict}
        />
        <TextInput
          style={styles.input}
          placeholder="번"
          placeholderTextColor="#B0B0B0"
          value={bun}
          onChangeText={setBlock}
        />
        <TextInput
          style={styles.input}
          placeholder="지"
          placeholderTextColor="#B0B0B0"
          value={ji}
          onChangeText={setLot}
        />
      </View>
      {/* onPress={handleSearch} */}
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>조회하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default BuildingRegister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    color: '#000',
    marginBottom: 30,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  inputContainer: {
    width: '87%',
    marginTop: 20,
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#868686',
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 15,
    fontSize: 20,
    color: '#000',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 30,
    width: '90%',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    // fontWeight: 'bold',
  },
});
