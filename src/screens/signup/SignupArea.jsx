import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SignupArea() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>관심지역</Text>

      <TextInput
        style={styles.input}
        placeholder="광역시/도"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="시/군/구"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="도로명"
        placeholderTextColor="#999"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signup')}
      >
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
