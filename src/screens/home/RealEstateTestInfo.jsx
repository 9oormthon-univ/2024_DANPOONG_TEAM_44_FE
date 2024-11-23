import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

const RealEstateTestInfo = ({ navigation }) => {
  const questions = [
    '전세가율을 확인하셨나요?',
    '계약 전, 등기부등본을 확인하셨나요?',
    '등기부등본에서 전세권 우선 순위를 확인하셨나요?',
    '계약하고자 하는 매물이 다수의 공인중개소에 등록되어있나요?',
    '건축물 대장에서 각 소유 부분의 소유자와 계약자가 일치 한가요?',
    '임차주택의 대출 여부 및 정도를 확인하였나요?',
    '해당 건축물이 건축용도에 맞는 건물인가요?',
    '집콕 플랫폼에서 알려드리는 4가지 주의사항을 모두 준수 하셨나요?',
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const scorePerQuestion = 12.5;
    const totalScore = answers.reduce(
      (sum, answer) => (answer === 'yes' ? sum + scorePerQuestion : sum),
      0,
    );

    navigation.navigate('RealEstateResult', { score: totalScore });
  };

  RealEstateTestInfo.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>부동산 적합도</Text>
        {questions.map((question, index) => (
          <View key={index} style={styles.question}>
            <Text>{`${index + 1}. ${question}`}</Text>
            <View style={styles.answerContainer}>
              <TouchableOpacity
                style={[
                  styles.answerButtonYes,
                  answers[index] === 'yes' && styles.selected,
                ]}
                onPress={() => handleAnswer(index, 'yes')}
              >
                <Text style={styles.answerText}>예</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.answerButtonNo,
                  answers[index] === 'no' && styles.selected,
                ]}
                onPress={() => handleAnswer(index, 'no')}
              >
                <Text style={styles.answerText}>아니오</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.divider} />
          </View>
        ))}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>평가하기</Text>
        </TouchableOpacity>
      </ScrollView>
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
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
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
    width: '30%',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  answerButtonNo: {
    backgroundColor: '#F7F7F8',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '30%',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  selected: { backgroundColor: '#E1E3E6' },
  answerText: { color: '#333', fontSize: 16 },
  submitButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '50%',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
    padding: 10,
  },
  buttonText: { color: '#fff', fontSize: 18, textAlign: 'center' },
});

export default RealEstateTestInfo;
