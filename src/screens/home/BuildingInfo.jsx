import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BuildingInfo = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>건물 정보</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>고유번호: 서울시 단풍동</Text>
        <Text style={styles.infoText}>건물명: 서울시 단풍동</Text>
        <Text style={styles.infoText}>주소: 서울시 단풍동</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.sectionTitle}>건물 기타 정보</Text>
        <Text style={styles.infoText}>고유번호:</Text>
        <Text style={styles.infoText}>건물명:</Text>
        <Text style={styles.infoText}>주소:</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.sectionTitle}>용도 정보</Text>
        <Text style={styles.infoText}>주용도:</Text>
        <Text style={styles.infoText}>기타용도:</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RealEstateCaution')}
      >
        <Text style={styles.buttonText}>다음</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BuildingInfo;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
    marginLeft: 10,
    color: '#000',
    alignSelf: 'flex-start',
  },
  infoBox: {
    backgroundColor: '#EDF0F5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 22,
    color: '#000',
  },
  infoText: {
    fontSize: 18,
    color: '#4D4D4D',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
