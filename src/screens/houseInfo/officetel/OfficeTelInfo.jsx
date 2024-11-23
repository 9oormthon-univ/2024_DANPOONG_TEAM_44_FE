import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const OfficeTelInfo = () => {
  const navigation = useNavigation();
  const [rcptYr, setYear] = useState('');
  const [mno, setMainNumber] = useState('');
  const [sno, setSubNumber] = useState('');
  const route = useRoute();
  const { city, district, neighborhood } = route.params; // 이전 화면에서 전달된 데이터

  const handleSearch = () => {
    if (!rcptYr || !mno || !sno) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    console.log('입력된 데이터info:', {
      city,
      rcptyr: rcptYr,
      cggnm: district,
      stdgcd: neighborhood,
      mno: mno,
      sno: sno,
    });

    // 모든 데이터를 함께 전달
    navigation.navigate('ApartmentResult', {
      city,
      district,
      neighborhood,
      year: rcptYr,
      mainNumber: mno,
      subNumber: sno,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Text style={styles.title}>다세대 시세</Text>
          </View>

          <View style={styles.inputContainer}>
            {/* 접수 연도 */}
            <TextInput
              style={styles.input}
              placeholder="접수 연도"
              placeholderTextColor="#B0B0B0"
              value={rcptYr}
              onChangeText={setYear}
              keyboardType="numeric"
            />

            {/* 본번 */}
            <TextInput
              style={styles.input}
              placeholder="본번"
              placeholderTextColor="#B0B0B0"
              value={mno}
              onChangeText={setMainNumber}
              keyboardType="numeric"
            />

            {/* 부번 */}
            <TextInput
              style={styles.input}
              placeholder="부번"
              placeholderTextColor="#B0B0B0"
              value={sno}
              onChangeText={setSubNumber}
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Text style={styles.buttonText}>조회하기</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OfficeTelInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  title: {
    fontSize: 30,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 40,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#868686',
    fontSize: 20,
    color: '#868686',
    paddingVertical: 10,
    marginTop: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
