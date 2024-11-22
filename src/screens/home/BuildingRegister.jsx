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
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [block, setBlock] = useState('');
  const [lot, setLot] = useState('');

  const handleSearch = () => {
    // 조회 로직 추가 가능
    alert(
      `조회 요청\n시/군/구: ${city}\n동/읍/면: ${district}\n번: ${block}\n지: ${lot}`,
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>건축물대장 표제부</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="시/군/구"
          placeholderTextColor="#B0B0B0"
          value={city}
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
          value={block}
          onChangeText={setBlock}
        />
        <TextInput
          style={styles.input}
          placeholder="지"
          placeholderTextColor="#B0B0B0"
          value={lot}
          onChangeText={setLot}
        />
      </View>
      {/* onPress={handleSearch} */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BuildingInfo')}
      >
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
