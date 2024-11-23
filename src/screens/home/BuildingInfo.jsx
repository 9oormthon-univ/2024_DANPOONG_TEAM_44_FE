import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import FavoriteModal from '../../components/modal/FavoriteModal';

const BuildingInfo = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { city, district, block, lot } = route.params; // 앞에서 받은 값
  const [buildingData, setBuildingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const fullAddress = `${city} ${district}`;
  const [modalVisible, setModalVisible] = useState(false); // 모달 상태
  const [id, setId] = useState(''); // 별칭 입력

  // http://{SERVER_URL}/building-info
  // GET
  // 주소(시/구/동), 번, 지, 페이징
  // {SERVER_URL}/building-info?address=서울특별시 구로구 구로동&bun=1267&ji=0000&pageNo=1
  // bun(번), ji(지)는 최대 4자리이며, 사용자 입력 없을 경우 0으로 요청 보내주세요

  // API 요청
  useEffect(() => {
    // http://{52.78.38.237}/building-info?address=${fullAddress}&bun=${block}&ji={lot}&pagoNo=1
    // {SERVER_URL}/building-info?address=서울특별시 구로구 구로동&bun=1267&ji=0000&pageNo=1
    const fetchBuildingData = async () => {
      try {
        const response = await fetch(
          `http://52.78.38.237/building-info?address=${fullAddress}&bun=${block}&ji=${lot}&pagoNo=1`,
        );
        if (!response.ok) {
          throw new Error('API 요청 실패:', response.status);
        }
        const result = await response.json();
        setBuildingData({
          platPlc: result.data[0].platPlc, // 주소
          bldNm: result.data[0].bldNm, // 건물명
          archArea: result.data[0].archArea, // 건축 면적
          mainPurpsCdNm: result.data[0].mainPurpsCdNm, // 주용도코드
          etcPurps: result.data[0].etcPurps, // 기타 코드
          hhldCnt: result.data[0].hhldCnt, // 세대 수
          fmlyCnt: result.data[0].fmlyCnt, // 가구 수
          mgmBldrgstPk: result.data[0].mgmBldrgstPk, // 관리 건축물 대장 PK
          newPlatPlc: result.data[0].newPlatPlc, // 도로명 대지위
        });
        // console.log('받아온 데이터:', result);
      } catch (error) {
        console.log(fullAddress);
        console.log(block);
        console.log(lot);
        console.error('API 요청 에러:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBuildingData();
  }, [city, district, block, lot]);

  // 모달 열기
  const openModal = () => {
    setBuildingData(buildingData); // 선택된 데이터 설정
    setModalVisible(true); // 모달 열기
  };

  // 찜 목록 등록 요청
  const handleRegisterFavorite = async id => {
    try {
      if (!id.trim() === '') {
        alert('별칭을 입력해주세요!');
        return;
      }

      const response = await fetch(`http://52.78.38.237/favorite-offer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          platPlc: buildingData.platPlc,
          bldNm: buildingData.bldNm,
          alias: id.trim(),
        }),
      });
      console.log('응답 상태 코드:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('서버 응답 에러 텍스트:', errorText);
        alert('등록 실패: 서버 오류');
        return;
      }

      const favoritesData = await response.json();
      console.log('현재 찜 목록:', favoritesData);
      alert('찜 목록에 등록되었습니다!');
      setModalVisible(false);
      setId('');
    } catch (error) {
      console.log(id);
      console.error('찜 목록 등록 에러:', error);
      alert('등록 중 오류가 발생했습니다.');
    }
  };

  // 로딩 상태
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  // 데이터가 없을 경우
  if (!buildingData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>데이터를 불러오지 못했습니다.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>뒤로가기</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>건물 정보</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>주소: {buildingData.platPlc}</Text>
        <Text style={styles.infoText}>건물명: {buildingData.bldNm}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.sectionTitle}>건물 기타 정보</Text>
        <Text style={styles.infoText}>건축면적: {buildingData.archArea}</Text>
        <Text style={styles.infoText}>
          주용도코드: {buildingData.mainPurpsCdNm}
        </Text>
        <Text style={styles.infoText}>기타용도: {buildingData.etcPurps}</Text>
        <Text style={styles.infoText}>세대 수: {buildingData.hhldCnt}</Text>
        <Text style={styles.infoText}>가구 수: {buildingData.fmlyCnt}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>대지 위치: {buildingData.platPlc}</Text>
        <Text style={styles.infoText}>
          관리 건축물 대장 PK: {buildingData.mgmBldrgstPk}
        </Text>
        <Text style={styles.infoText}>
          도로명 대지위: {buildingData.newPlatPlc}
        </Text>
      </View>
      <TouchableOpacity style={styles.button2} onPress={openModal}>
        <Text style={styles.buttonTex2}>찜하기</Text>
      </TouchableOpacity>

      {/* 모달 불러오기 */}
      <FavoriteModal
        visible={modalVisible}
        // buildingData={handleRegisterFavorite}
        onRegister={handleRegisterFavorite}
        onClose={() => setModalVisible(false)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RealEstateCaution')}
      >
        <Text style={styles.buttonText}>다음</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BuildingInfo;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
    marginLeft: 10,
    color: '#000',
    alignSelf: 'flex-start',
  },
  infoBox: {
    backgroundColor: '#EDF0F5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 22,
    color: '#000',
  },
  infoText: {
    fontSize: 18,
    color: '#4D4D4D',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  button2: {
    backgroundColor: '#E0E9F5',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText2: {
    color: '#585858',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
