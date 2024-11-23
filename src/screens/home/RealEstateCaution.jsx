import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';

const RealEstateCaution = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>부동산 등기</Text>
      <Text style={styles.subtitle}>아래 정보를 확인하세요!</Text>
      <Text style={styles.warning}>주의사항</Text>
      <Text style={styles.warningDetails}>주의사항 내용입니다.</Text>
      <TouchableOpacity style={styles.linkButton}>
        <Text style={styles.linkText}>인터넷 등기소 바로가기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('RealEstateTest')}
      >
        <Text style={styles.buttonText}>다음</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

RealEstateCaution.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 26,
    alignSelf: 'flex-start',
    margin: 30,
    color: '#000',
    marginBottom: 30,
  },
  warning: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginLeft: 30,
    color: '#007AFF',
    marginBottom: 5,
  },
  warningDetails: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginLeft: 30,
    margin: 10,
  },
  linkButton: {
    backgroundColor: '#E0E9F5',
    padding: 15,
    marginBottom: 10,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '87%',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  linkText: { color: '#585858', fontSize: 16 },
  nextButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '87%',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: { color: '#fff', fontSize: 16, textAlign: 'center' },
});

export default RealEstateCaution;
