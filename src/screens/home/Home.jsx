import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();
  const openURL = url => {
    Linking.openURL(url).catch(err =>
      console.error('Failed to open URL:', err),
    );
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slideImages = [
    require('../../assets/images/home/slide/slide1.png'),
    require('../../assets/images/home/slide/slide3.png'),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % slideImages.length);
    }, 3000);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* 슬라이드 이미지 */}
        <View style={styles.mainImagePlaceholder}>
          <Image
            source={slideImages[currentImageIndex]}
            style={styles.mainImage}
            resizeMode="cover"
          />
        </View>

        {/* 사용자용 서비스 */}
        <View style={styles.card}>
          <Text style={styles.sectionTitleMiddle}>사용자님을 위한 서비스</Text>
          <View style={styles.serviceContainer}>
            <TouchableOpacity
              style={styles.serviceButton}
              onPress={() => navigation.navigate('RealEstateInfo')}
            >
              <Image
                source={require('../../assets/images/home1.png')}
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceText}>부동산 정보</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.serviceButton}
              onPress={() => navigation.navigate('FavoriteHomes')}
            >
              <Image
                source={require('../../assets/images/home2.png')}
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceText}>내가 찜한 집</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 공공 서비스 바로가기 */}
        <Text style={styles.sectionTitle}>공공서비스 바로가기</Text>
        {/* 하단 공공서비스 스크롤 */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.publicServiceContainer}
        >
          <TouchableOpacity
            onPress={() => openURL('http://www.iros.go.kr/PMainJ.jsp')}
          >
            <Image
              source={require('../../assets/images/home/service1.png')}
              style={styles.publicServiceIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openURL('https://www.gov.kr/portal/main/nologin')}
          >
            <Image
              source={require('../../assets/images/home/service2.png')}
              style={styles.publicServiceIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openURL('https://www.scourt.go.kr/scourt/index.html')
            }
          >
            <Image
              source={require('../../assets/images/home/service3.png')}
              style={styles.publicServiceIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openURL('https://www.nts.go.kr/')}>
            <Image
              source={require('../../assets/images/home/service4.png')}
              style={styles.publicServiceIcon}
            />
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'flex-start', // 왼쪽 정렬
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  mainImagePlaceholder: {
    width: '100%',
    height: 150,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  mainImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  card: {
    // 큰 카드
    backgroundColor: '#228bfc',
    width: '100%',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    display: 'flex',
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'SpoqaHanSansNeo-Medium',
    color: '#000',
    marginLeft: 10,
    marginTop: 5,
    alignSelf: 'flex-start',
    // padding:5,
  },
  sectionTitleMiddle: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'SpoqaHanSansNeo-Medium',
    marginBottom: 20,
    textAlign: 'center',
  },
  serviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  serviceButton: {
    alignItems: 'center',
    width: '40%',
    height: '100%',
    color: '#F5F5F5',
    backgroundColor: '#EDF0F5',
    borderRadius: 15,
  },
  serviceIcon: {
    marginTop: 30,
    width: 80,
    height: 80,
    marginBottom: 5,
  },
  serviceText: {
    fontSize: 16,
    fontFamily: 'SpoqaHanSansNeo-Bold',
    color: '#1E81CE',
    padding: 5,
    marginTop: 7,
  },
  publicServiceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  publicServiceIcon: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
