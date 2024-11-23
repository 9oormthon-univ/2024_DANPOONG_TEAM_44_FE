import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import { useNavigation } from '@react-navigation/native';

const KakaoMap = () => {
  const navigation = useNavigation();

  const kakaoMapHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY"></script>
        <style>
          html, body { margin: 0; padding: 0; height: 100%; }
          #map { width: 100%; height: 100%; }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          var mapContainer = document.getElementById('map');
          var mapOption = {
            center: new kakao.maps.LatLng(37.5665, 126.9780), // 서울시청 좌표
            level: 3 // 확대 레벨
          };

          var map = new kakao.maps.Map(mapContainer, mapOption);

          var marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(37.5665, 126.9780),
            map: map
          });

          var infoWindow = new kakao.maps.InfoWindow({
            content: '<div style="padding:10px;">서울특별시청</div>',
            position: new kakao.maps.LatLng(37.5665, 126.9780)
          });
          infoWindow.open(map, marker);
        </script>
      </body>
    </html>
  `;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="주변 중개소 찾기"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.mapContainer}>
        <WebView
          source={{ html: kakaoMapHtml }}
          style={styles.map}
          javaScriptEnabled
          originWhitelist={['*']}
        />
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.title}>참조은중개소</Text>
        <View style={styles.details}>
          <Text style={styles.address}>서울시 단풍로 44번길</Text>
          <Text style={styles.phone}>031-1234-5678</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default KakaoMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  mapContainer: {
    flex: 2,
    borderBottomColor: '#fff',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  infoBox: {
    flex: 1,
    alignSelf: 'center',
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    margin: 10,
    color: '#333',
  },
  details: {
    backgroundColor: '#EDF0F5',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
  },
  address: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
    margin: 10,
  },
  phone: {
    fontSize: 16,
    color: '#868686',
    margin: 10,
  },
});
