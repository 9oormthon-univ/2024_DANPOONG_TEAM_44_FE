import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const formatPrice = value => {
  if (!value) return '';
  const numericValue = value.replace(/[^0-9]/g, '');
  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// eslint-disable-next-line react/prop-types
function RentCalculate({ navigation }) {
  const [rentPrice, setRentPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  const calculateRatio = () => {
    if (
      !rentPrice ||
      !salePrice ||
      isNaN(rentPrice.replace(/,/g, '')) ||
      isNaN(salePrice.replace(/,/g, ''))
    ) {
      alert('숫자를 정확히 입력해주세요.');
      return;
    }

    const ratio = (
      (parseFloat(rentPrice.replace(/,/g, '')) /
        parseFloat(salePrice.replace(/,/g, ''))) *
      100
    ).toFixed(2);
    // eslint-disable-next-line react/prop-types
    navigation.navigate('CalculateResult', { ratio });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputWrapper}>
          <Text
            style={[
              styles.label,
              focusedField === 'rentPrice' && styles.focusedLabel,
            ]}
          >
            전세가격
          </Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="0"
              placeholderTextColor="#B0B0B0"
              keyboardType="numeric"
              value={rentPrice}
              onFocus={() => setFocusedField('rentPrice')}
              onBlur={() => setFocusedField(null)}
              onChangeText={value => setRentPrice(formatPrice(value))}
            />
            <Text style={styles.unitText}>원</Text>
          </View>
        </View>

        <View style={styles.inputWrapper}>
          <Text
            style={[
              styles.label,
              focusedField === 'salePrice' && styles.focusedLabel,
            ]}
          >
            매매가격
          </Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="0"
              placeholderTextColor="#B0B0B0"
              keyboardType="numeric"
              value={salePrice}
              onFocus={() => setFocusedField('salePrice')}
              onBlur={() => setFocusedField(null)}
              onChangeText={value => setSalePrice(formatPrice(value))}
            />
            <Text style={styles.unitText}>원</Text>
          </View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>전세가율이 무엇인가요?</Text>
          <Text style={styles.infoDescription}>
            : 주택매매가격에 대비한 전세가격의 비율을 의미합니다.
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={calculateRatio}>
          <Text style={styles.buttonText}>계산하기</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RentCalculate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20, // 위아래 여백 추가
  },
  inputWrapper: {
    width: '87%',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: '#868686',
    marginBottom: 10,
    marginLeft: 5,
  },
  focusedLabel: {
    color: '#007AFF',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#000',
  },
  unitText: {
    fontSize: 16,
    color: '#868686',
    marginLeft: 10,
  },
  infoBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
    width: '87%',
  },
  infoTitle: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 10,
  },
  infoDescription: {
    fontSize: 14,
    color: '#868686',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 30,
    width: '50%',
    alignItems: 'center',
    marginTop: 20, // 버튼 위아래 간격 추가
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
