import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import { useNavigation } from '@react-navigation/native';

function HouseInfo() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="집 정보" rightIcons={[]} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.card1}>
          <Text style={styles.cardTitle}>
            집 시세를 {'\n'}조회하고 싶으신가요?
          </Text>
          <Text style={styles.cardSubtitle}>
            우리집 뿐만 아니라, {'\n'}다른 집 시세를 조회할 수 있어요!
          </Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={() => navigation.navigate('MarketPriceCheck')}
            >
              <Image
                source={require('../../assets/images/homeinfo1.png')}
                style={styles.icon1}
              />
              <Text style={styles.iconText}>시세 조회</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={() => navigation.navigate('RentCalculate')}
            >
              <Image
                source={require('../../assets/images/homeinfo2.png')}
                style={styles.icon1}
              />
              <Text style={styles.iconText}>계산기</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card2}>
          <Text style={styles.cardTitle2}>주변 중개소를 찾으시나요?</Text>
          <Text style={styles.cardSubtitle2}>
            우리집 주변 뿐만 아니라 전국에 {'\n'}위치한 중개소 위치를
            보여드려요!
          </Text>
          <TouchableOpacity
            style={styles.kakaoButton}
            onPress={() => navigation.navigate('FindAgent')}
          >
            <Image source={require('../../assets/images/kakaomap.png')} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HouseInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    color: '#000',
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  card1: {
    // 각 카드 뷰
    backgroundColor: '#007AFF',
    borderRadius: 15,
    padding: 30,
    marginBottom: 43,
    width: '90%',
    display: 'flex',
  },
  card2: {
    // 각 카드 뷰
    backgroundColor: '#EFF6FC',
    borderRadius: 15,
    padding: 30,
    width: '90%',
    display: 'flex',
    // marginBottom: 43,
  },
  cardTitle: {
    fontSize: 26,
    color: '#fff',
    marginBottom: 10,
    alignSelf: 'center',
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardTitle2: {
    fontSize: 20,
    color: '#505159',
    textAlign: 'center',
  },
  cardSubtitle2: {
    fontSize: 14,
    color: '#505159',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconWrapper: {
    // 아이콘 박스
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B8D7F7',
    borderRadius: 12,
  },
  iconText: {
    color: '#0080FF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    alignItems: 'center',
    margin: 16.5,
  },
  icon1: {
    width: 80,
    height: 80,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    // 시세조회, 계산기 구분선
    height: 110,
    margin: 12,
  },
  kakaoButton: {
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
});
