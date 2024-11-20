import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useHideBottomTabs from '../../hooks/useHideBottomTabs';

function AreaSetting() {
  const navigation = useNavigation();

  useHideBottomTabs(navigation);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.label}>관심지역 :</Text>

          <TextInput
            style={styles.input}
            placeholder="광역시/도"
            placeholderTextColor="#868686"
          />
          <TextInput
            style={styles.input}
            placeholder="시/군/구"
            placeholderTextColor="#868686"
          />
          <TextInput
            style={styles.input}
            placeholder="도로명"
            placeholderTextColor="#868686"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MyPage')}
          >
            <Text style={styles.buttonText}>수정하기</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default AreaSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  label: {
    fontSize: 30,
    color: '#000000',
    marginLeft: 20,
    alignSelf: 'flex-start',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#868686',
    fontSize: 20,
    paddingBottom: 14,
    width: '87%',
    marginTop: 60,
    color: '#333',
  },
  button: {
    backgroundColor: '#0080FF',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: 180,
    marginTop: 150,
    marginBottom: 50,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
