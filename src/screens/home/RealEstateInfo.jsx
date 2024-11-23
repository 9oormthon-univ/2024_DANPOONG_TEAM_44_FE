import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import { MoveTopIcon } from '../../assets/icons/iconSvg';

const RealEstateInfo = () => {
  const scrollViewRef = useRef(null); // ScrollView에 대한 ref 생성
  const navigation = useNavigation();

  const scrollToTop = () => {
    // ScrollView의 ref를 사용하여 위로 스크롤
    scrollViewRef.current?.scrollTo({
      y: 0, // 최상단
      animated: true, // 부드럽게 스크롤
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header showBackButton={true} onBackPress={() => navigation.goBack()} />
      <ScrollView
        ref={scrollViewRef} // ref 연결
        contentContainerStyle={styles.scrollContainer}
      >
        <Text style={styles.title}>
          잠깐! 부동산은{'\n'}이런점을 참고하세요.
        </Text>

        <Image
          source={require('../../assets/images/home/realestateinfo/RealEstateInfo1.png')} // 전세가율 확인하기 이미지
          style={styles.icon}
        />
        <View style={styles.infoSection}>
          <View style={styles.textContainer}>
            <Text style={styles.infoTitle}>전세가율 확인하기</Text>
            <Text style={styles.infoText}>
              전세가율은 주택의 매매가격 대비 전세 보증금의 비율을 뜻합니다.
              전세가율이 높은 경우 전세가와 매매가격 차이가 적다는 것을
              의미합니다.
              {'\n'}
              {'\n'}전세가율이 높은 경우 전세사기에 노출될 가능성이 크니
              전세가율을 확인해보세요!
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <Image
          source={require('../../assets/images/home/realestateinfo/RealEstateInfo3.png')} // 등기부등본 확인하기 이미지
          style={styles.icon}
        />
        <View style={styles.infoSection}>
          <View style={styles.textContainer}>
            <Text style={styles.infoTitle}>등기부등본 확인하기</Text>
            <Text style={styles.infoText}>
              임차주택의 근저당, 과다한 대출 여부를 확인할 필요가 있어요.{'\n'}
              해당 부동산의 소유권자가 대출금을 갚지 못해서 해당 부동산이 경매로
              넘어가게 되면 은행의 근저당권이 ‘ 전세금을 우선 변제 ‘ 하는 경우가
              있기 때문에 임차인은 ‘ 보험금을 잃을 위험 ‘ 이 있습니다.
              {'\n'}
              {'\n'}
              또한 ‘ 전세권 우선 순위’를 확인하여 우선 변제 순위를 ‘선순위
              근저당권’ + ‘채권’ ‘주택 매매 가격’ 이라면 주택이 팔려도 근저당 및
              채권을 돌려줄 수 없으니 주의해야해요!{' '}
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <Image
          source={require('../../assets/images/home/realestateinfo/RealEstateInfo2.png')} // 건축물대장 확인하기 이미지
          style={styles.icon}
        />
        <View style={styles.infoSection}>
          <View style={styles.textContainer}>
            <Text style={styles.infoTitle}>건축물대장 확인하기</Text>
            <Text style={styles.infoText}>
              무허가, 불법 건축물로 등록 및 주택용도 여부 확인을 할 필요가
              있어요.{'\n'}
              해당 건축물이 불법 건축물로 판명된 경우 향후 ‘철거 명령’ 을 받을
              수 있고 ‘법적 분쟁’ 으로 이어질 수 있으니 확인해보세요!
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <Image
          source={require('../../assets/images/home/realestateinfo/RealEstateInfo4.png')} // 공인중개사 확인하기 이미지
          style={styles.icon}
        />
        <View style={styles.infoSection}>
          <View style={styles.textContainer}>
            <Text style={styles.infoTitle}>공인중개사 및 집주인 확인하기</Text>
            <Text style={styles.infoText}>
              최근 전세사기 피해 중 공인중개사와 피의자의 공모로 발생한 경우가
              다수 발생하고 있습니다.{'\n'}
              {'\n'}
              개업한 공인중개사가 자격 등록 후 정상영업 중인지 확인 하며 계약
              당사자가 등기부등본 ,건축물대장 상 소유자와 동일한지 신분 확인을
              해보세요!
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BuildingRegister')}
        >
          <Text style={styles.buttonText}>시작하기</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* 상단으로 이동 버튼 */}
      <TouchableOpacity style={styles.scrollTopButton} onPress={scrollToTop}>
        <MoveTopIcon />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RealEstateInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 26,
    marginBottom: 64,
    marginTop: 20,
    marginLeft: 5,
    color: '#000000',
    opacity: 0.8,
    fontFamily: 'SpoqaHanSansNeo-Medium',
    textAlign: 'left',
    alignSelf: 'flex-start',
    lineHeight: 34,
  },
  divider: {
    height: 1,
    backgroundColor: '#DDE6F8',
    width: '100%',
    marginVertical: 40,
  },
  infoSection: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 32,
    alignSelf: 'flex-start',
  },
  textContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 20,
    fontFamily: 'SpoqaHanSansNeo-Bold',
    color: '#1F6BE5',
    marginBottom: 16,
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#556576',
    // fontFamily: 'SpoqaHanSansNeo-Medium',
    fontFamily: 'SpoqaHanSansNeo-Regular',
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 62,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SpoqaHanSansNeo-Regular',
  },
  scrollTopButton: {
    position: 'absolute',
    bottom: 120,
    right: 30,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 5,
  },
});
