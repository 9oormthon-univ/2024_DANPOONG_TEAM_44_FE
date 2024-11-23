import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';

const RealEstateResult = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        김단풍<Text style={styles.title2}>님의 점수는{'\n'}</Text>{' '}
        <Text style={styles.score}>78</Text><Text style={styles.title2}>점 입니다.</Text>{' '}
      </Text>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>홈으로 이동</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

RealEstateResult.propTypes = {
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
  title: { fontSize: 30, marginBottom: 20 },
  title2: { fontSize: 30, marginBottom: 20, color: '#585858' },
  score: {
    fontSize: 30,
    color: '#009231',
    marginBottom: 20,
  },
  homeButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '50%',
    alignContent: 'center',
    position: 'absolute', // 절대 위치 지정
    bottom: 50, // 하단에서 50px 위로 배치
    // marginTop: 100,
},
  buttonText: { color: '#fff', fontSize: 16, textAlign: 'center' },
});

export default RealEstateResult;
