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
import { useNavigation } from '@react-navigation/native';
import useHideBottomTabs from '../../../hooks/useHideBottomTabs';

const Apartment = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState('서울특별시');
  const [cggNm, setDistrict] = useState('');
  const [stdgNm, setNeighborhood] = useState('');
  useHideBottomTabs(navigation);

  const handleNext = () => {
    if (!city || !cggNm || !stdgNm) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    navigation.navigate('ApartmentInfo', {
      city,
      district: cggNm,
      neighborhood: stdgNm,
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
            <Text style={styles.title}>아파트 시세</Text>
          </View>

          <View style={styles.inputContainer}>
            {/* City Input */}
            <TextInput
              style={styles.input}
              value={city}
              onChangeText={setCity}
              editable={false} // 서울시는 고정
            />

            {/* District Input */}
            <TextInput
              style={styles.input}
              placeholder="구"
              placeholderTextColor="#B0B0B0"
              value={cggNm}
              onChangeText={setDistrict}
            />

            {/* Neighborhood Input */}
            <TextInput
              style={styles.input}
              placeholder="동"
              placeholderTextColor="#B0B0B0"
              value={stdgNm}
              onChangeText={setNeighborhood}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>다음</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Apartment;

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
  },
  title: {
    fontSize: 30,
    color: '#333',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  inputContainer: {
    marginBottom: 40,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#868686',
    fontSize: 20,
    color: '#333',
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
    fontWeight: 'bold',
  },
});
