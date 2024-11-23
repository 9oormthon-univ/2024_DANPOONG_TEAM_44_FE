import React from 'react';
import {
  //   View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';

const RealEstateTest = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>부동산 적합도 {'\n'} 테스트</Text>
      <Text style={styles.subtitle}>
        내가 찾은 부동산을 점검해보고 {'\n'} 계약 전에 확인해봐요!
      </Text>
      <Image
        source={require('../../assets/images/home/realestateinfo/test_image.png')}
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('RealEstateTestInfo')}
      >
        <Text style={styles.buttonText1}>시작하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText2}>홈으로 돌아가기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

RealEstateTest.propTypes = {
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
    fontSize: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginBottom: 10,
},
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
   },
  image: { width: 170, height: 170, marginBottom: 20 },
  startButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '50%',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  homeButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '87%',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText1: { color: '#fff', fontSize: 16, textAlign: 'center' },
  buttonText2: { color: '#585858', fontSize: 16, textAlign: 'center' },
});

export default RealEstateTest;
