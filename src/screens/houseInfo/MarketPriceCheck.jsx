import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import { useNavigation } from '@react-navigation/native';

function MarketPriceCheck() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="시세조회"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />

      <Text style={styles.headerText}>
        어떤 형태의 주거공간을{'\n'}찾고 계신가요?{'\n'}원하시는 매물을
        보여드려요!
      </Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Apartment')}
        >
          <ImageBackground
            source={require('../../assets/images/houseinfo/apt_image.png')}
            style={styles.cardBackground}
            imageStyle={styles.cardImageStyle} // 이미지 자체의 스타일 설정
          >
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>아파트</Text>
              <Text style={styles.cardSubtitle}>
                아파트의 전 · 월세 시세조회
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('MultiFamily')}
        >
          <ImageBackground
            source={require('../../assets/images/houseinfo/multi_image.png')}
            style={styles.cardBackground}
            imageStyle={styles.cardImageStyle}
          >
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>다세대</Text>
              <Text style={styles.cardSubtitle}>
                다세대의 전 · 월세 시세조회
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('OfficeTel')}
        >
          <ImageBackground
            source={require('../../assets/images/houseinfo/off_image.png')}
            style={styles.cardBackground}
            imageStyle={styles.cardImageStyle}
          >
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>오피스텔</Text>
              <Text style={styles.cardSubtitle}>
                오피스텔의 전 · 월세 시세조회
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default MarketPriceCheck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 16,
    color: '#868686',
    paddingHorizontal: 30,
    paddingVertical: 20,
    lineHeight: 20,
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  card: {
    margin: 5,
    width: '87%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden', // 자식 컴포넌트의 영역 제한
    justifyContent: 'center',
    alignContent: 'center',
  },
  cardBackground: {
    flex: 1,
    justifyContent: 'flex-end', // 텍스트를 카드의 하단에 배치
    padding: 20,
  },
  cardImageStyle: {
    resizeMode: 'cover', // 배경 이미지 크기 조정
  },
  textContainer: {
    padding: 10,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 30,
    color: '#fff',
    margin: 10,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 30,
    marginLeft: 5,
  },
});
