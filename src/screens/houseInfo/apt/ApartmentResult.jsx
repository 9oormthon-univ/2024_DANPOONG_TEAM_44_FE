import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';

const ApartmentResult = () => {
  const [isDetailedView, setIsDetailedView] = useState(false);
  const route = useRoute();
  //   const { year, mainNumber, subNumber, buildingName } = route.params;
  const { buildingName } = route.params;
  const { city, district, neighborhood } = route.params;

  const handleDetailsToggle = () => {
    setIsDetailedView(!isDetailedView);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* 첫 번째 화면 */}
        {!isDetailedView && (
          <>
            <View style={styles.header}>
              <Text style={styles.title}>조회 정보</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoText}>
                주소:{' '}
                <Text
                  style={styles.boldText}
                >{`${city} ${district} ${neighborhood}`}</Text>
              </Text>
              <Text style={styles.infoText}>
                건물명: <Text style={styles.boldText}>{`${buildingName}`}</Text>
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>상세정보</Text>
              <Text style={styles.infoText}>건축년도:</Text>
              <Text style={styles.infoText}>임대면적:</Text>
              <Text style={styles.infoText}>임대면적:</Text>
              <Text style={styles.infoText}>전월세 구분:</Text>
              <Text style={styles.infoText}>보증금:</Text>
              <Text style={styles.infoText}>임대료:</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleDetailsToggle}
            >
              <Text style={styles.buttonText}>자세히 보기</Text>
            </TouchableOpacity>
          </>
        )}

        {/* 두 번째 화면 */}
        {isDetailedView && (
          <>
            <View style={styles.header}>
              <Text style={styles.title}>조회 정보</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoText}>
                주소:{' '}
                <Text
                  style={styles.boldText}
                >{`${city} ${district} ${neighborhood}`}</Text>
              </Text>
              <Text style={styles.infoText}>
                건물명: <Text style={styles.boldText}>{`${buildingName}`}</Text>
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>상세정보</Text>
              <Text style={styles.infoText}>건축년도:</Text>
              <Text style={styles.infoText}>임대면적:</Text>
              <Text style={styles.infoText}>임대면적:</Text>
              <Text style={styles.infoText}>전월세 구분:</Text>
              <Text style={styles.infoText}>보증금:</Text>
              <Text style={styles.infoText}>임대료:</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>추가정보</Text>
              <Text style={styles.infoText}>신규갱신여부:</Text>
              <Text style={styles.infoText}>종전 보증금:</Text>
              <Text style={styles.infoText}>종전 임대료:</Text>
            </View>
            <View style={styles.mapPreview}>
              <Image
                source={{
                  uri: 'https://via.placeholder.com/300x200.png?text=Kakao+Map',
                }}
                style={styles.mapImage}
              />
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApartmentResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  infoBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  button: {
    backgroundColor: '#E8F0FF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#007AFF',
    fontSize: 16,
  },
  mapPreview: {
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  mapImage: {
    width: '100%',
    height: 200,
  },
});
