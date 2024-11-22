import React from 'react';
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* 메인 이미지 */}
        <View style={styles.mainImagePlaceholder}>
          <Text style={styles.mainImageText}>슬라이드</Text>
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
    marginBottom: 30,
  },
  mainImageText: {
    color: '#B0B0B0',
  },
  card: {
    // 큰 카드
    backgroundColor: '#007AFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    display: 'flex',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    alignSelf: 'flex-start',
    // padding:5,
  },
  sectionTitleMiddle: {
    fontSize: 23,
    color: '#fff',
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 5,
  },
  serviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  serviceButton: {
    alignItems: 'center',
    width: '45%',
    height: '120%',
    padding: 10,
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
    fontSize: 18,
    color: '#1E81CE',
    padding: 5,
    marginTop: 7,
  },
  publicServiceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
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
