import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/common/Header';
import { useNavigation } from '@react-navigation/native';
import useHideBottomTabs from '../../../hooks/useHideBottomTabs';

const MultiFamily = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState('서울시');
  const [district, setDistrict] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  useHideBottomTabs(navigation);

  const handleNext = () => {
    if (!city || !district || !neighborhood) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    navigation.navigate('MultiFamilyInfo', {
      city,
      district,
      neighborhood,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header showBackButton={true} onBackPress={() => navigation.goBack()} />

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
            <TextInput
              style={styles.input}
              value={city}
              onChangeText={setCity}
              editable={false}
            />

            <TextInput
              style={styles.input}
              placeholder="구"
              placeholderTextColor="#B0B0B0"
              value={district}
              onChangeText={setDistrict}
            />

            <TextInput
              style={styles.input}
              placeholder="동"
              placeholderTextColor="#B0B0B0"
              value={neighborhood}
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

export default MultiFamily;

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
    paddingHorizontal: 30,
    paddingBottom: 20,
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
