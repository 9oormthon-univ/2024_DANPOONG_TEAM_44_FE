import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';

const RealEstateTestInfo = ({ navigation }) => {
  const [answers, setAnswers] = useState([null, null, null]); // 예시 질문 3개

  const handleAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };
  const handleSubmit = () => {
    navigation.navigate('RealEstateResult');
  };

  RealEstateTestInfo.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>부동산 적합도</Text>
      {answers.map((answer, index) => (
        <View key={index} style={styles.question}>
          <Text>1. ~적합합니까?</Text>
          <View style={styles.answerContainer}>
            <TouchableOpacity
              style={[
                styles.answerButtonYes,
                answer === 'yes' && styles.selected,
              ]}
              onPress={() => handleAnswer(index, 'yes')}
            >
              <Text style={styles.answerText}>예</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.answerButtonNo,
                answer === 'no' && styles.selected,
              ]}
              onPress={() => handleAnswer(index, 'no')}
            >
              <Text style={styles.answerText}>아니오</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
          </View>
        </View>
      ))}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>평가하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
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
    marginBottom: 20,
    alignSelf: 'flex-start',
    margin: 20,
  },
  question: { marginBottom: 20 },
  answerContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  answerButtonYes: {
    backgroundColor: '#E0E9F5',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '40%',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  answerButtonNo: {
    backgroundColor: '#F7F7F8',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '40%',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  selected: { backgroundColor: '#E1E3E6' },
  answerText: { color: '#333' },
  submitButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '50%',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // 원하는 색상
    marginVertical: 10,
  },
  buttonText: { color: '#fff', fontSize: 16, textAlign: 'center' },
});

export default RealEstateTestInfo;
