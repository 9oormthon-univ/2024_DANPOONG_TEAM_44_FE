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
import useHideBottomTabs from '../../../hooks/useHideBottomTabs';
import { useNavigation } from '@react-navigation/native';

const ApartmentResult = () => {
  const navigation = useNavigation();
  const [isDetailedView, setIsDetailedView] = useState(false);
  const route = useRoute();
  const { buildingName } = route.params;
  const { city, district, neighborhood } = route.params;
  useHideBottomTabs(navigation);

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
              <View style={styles.divider} />
              <Text style={styles.sectionTitle}>상세정보</Text>
              <Text style={styles.infoText}>건축년도:</Text>
              <Text style={styles.infoText}>임대면적:</Text>
              <Text style={styles.infoText}>임대면적:</Text>
              <Text style={styles.infoText}>전월세 구분:</Text>
              <Text style={styles.infoText}>보증금:</Text>
              <Text style={styles.infoText}>임대료:</Text>
              <View style={styles.divider} />
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
              <View style={styles.divider} />
              <Text style={styles.sectionTitle}>상세정보</Text>
              <Text style={styles.infoText}>건축년도:</Text>
              <Text style={styles.infoText}>임대면적:</Text>
              <Text style={styles.infoText}>임대면적:</Text>
              <Text style={styles.infoText}>전월세 구분:</Text>
              <Text style={styles.infoText}>보증금:</Text>
              <Text style={styles.infoText}>임대료:</Text>
            </View>
            <View style={styles.section}>
              <View style={styles.divider} />
              <Text style={styles.sectionTitle}>추가정보</Text>
              <Text style={styles.infoText}>신규갱신여부:</Text>
              <Text style={styles.infoText}>종전 보증금:</Text>
              <Text style={styles.infoText}>종전 임대료:</Text>
              <View style={styles.divider} />
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
    fontSize: 28,
    color: '#333',
  },
  infoBox: {
    borderRadius: 10,
    padding: 10,
  },
  infoText: {
    fontSize: 20,
    color: '#555',
    marginLeft: 15,
    padding: 10,
  },
  boldText: {
    color: '#333',
    marginLeft: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    padding: 10,
    alignSelf: 'flex-start',
    color: '#333',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // 원하는 색상
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#E0E9F5',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    width: '50%',
  },
  buttonText: {
    color: '#585858',
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
