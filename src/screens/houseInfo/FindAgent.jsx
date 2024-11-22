import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import Config from 'react-native-config';
import Constants from 'expo-constants';
const { kakaoRedirectUri, kakaoClientId, serverUrl, kakaoJsKey } =
  Constants.expoConfig.extra;

console.log('KAKAO_REDIRECT_URI:', kakaoRedirectUri);
console.log('KAKAO_CLIENT_ID:', kakaoClientId);
console.log('SERVER_URL:', serverUrl);
console.log('KAKAO_JS_KEY:', kakaoJsKey);

const KakaoMap = () => {
  const kakaoMapHtml = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=${Config.KAKAO_JS_KEY}&libraries=services"></script>
    <style>
      html, body { margin: 0; padding: 0; height: 100%; }
      #map { width: 100%; height: 100%; }
    </style>
  </head>
  <body>
    <div id="map" style="width:100%;height:100%;"></div>
    <script>
      try {
        // 지도 생성
        var mapContainer = document.getElementById('map');
        var mapOption = {
          center: new kakao.maps.LatLng(37.5665, 126.9780),
          level: 3
        };
        var map = new kakao.maps.Map(mapContainer, mapOption);

        // 장소 검색
        var ps = new kakao.maps.services.Places();
        ps.keywordSearch('부동산 중개소', function(data, status) {
          if (status === kakao.maps.services.Status.OK) {
            data.forEach(place => {
              var coords = new kakao.maps.LatLng(place.y, place.x);
              var marker = new kakao.maps.Marker({
                map: map,
                position: coords
              });
            });
          } else {
            console.error('검색 결과 없음');
          }
        });
      } catch (error) {
        console.error('Error loading map:', error);
      }
    </script>
  </body>
</html>
`;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        <WebView
          source={{ html: kakaoMapHtml }}
          style={styles.map}
          javaScriptEnabled={true}
          originWhitelist={['*']}
          onMessage={event => {
            console.log('WebView Message:', event.nativeEvent.data);
          }}
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
    justifyContent: 'center',
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
