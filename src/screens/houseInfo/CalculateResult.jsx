import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// eslint-disable-next-line react/prop-types
function CalculateResult({ route }) {
  // eslint-disable-next-line react/prop-types
  const { ratio } = route.params; // navigation으로부터 전달받은 ratio 값

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Card}>
        <Text style={styles.resultText}>
          해당 매물의 전세가율은{'\n'}
          <Text style={styles.ratioText}>{ratio}%</Text> 입니다.
        </Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>
          어느 정도의 전세가율이 안전한 매물이라고 판단하나요?
        </Text>
        <Text style={styles.infoDescription}>
          서울 시에서는 70%정도를 적정 비율로 판단하며 80%를 초과할 경우
          <Text style={styles.warningText}> 위험</Text> 등급으로 판단하고
          있습니다.
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default CalculateResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  resultText: {
    fontSize: 24,
    color: '#000',
    marginTop: 90,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  ratioText: {
    color: '#009231',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Card: {
    width: '90%',
    height: '35%',
    borderRadius: 10,
    backgroundColor: '#E7EDF4',
  },
  infoCard: {
    width: '90%',
    borderRadius: 10,
    padding: 15,
    marginTop: 30,
  },
  infoTitle: {
    fontSize: 17,
    color: '#868686',
    marginBottom: 10,
  },
  infoDescription: {
    fontSize: 14,
    color: '#00AAFF',
  },
  warningText: {
    color: '#FF3B30',
    fontWeight: 'bold',
  },
});
