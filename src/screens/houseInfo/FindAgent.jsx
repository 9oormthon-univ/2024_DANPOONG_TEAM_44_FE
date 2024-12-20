import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

export default function FindAgent() {
  const [latitude, setLatitude] = useState(null); // 위치 좌표 저장
  const [longitude, setLongitude] = useState(null);
  const [htmlContent, setHtmlContent] = useState(''); // 카카오 지도에 사용할 HTML을 저장

  useEffect(() => {
    const getLocation = async () => {
      // Location.requestForegroundPermissionsAsync()를 사용해 위치 권한 요청.
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('권한 오류', '위치 권한이 필요합니다.');
        return;
      }

      // 현재 위치 가져오기
      const location = await Location.getCurrentPositionAsync({});

      setLatitude(location.coords.latitude.toFixed(4));
      setLongitude(location.coords.longitude.toFixed(4));

      console.log(latitude, longitude);
      setHtmlContent(generateMapHtml(latitude, longitude));
    };

    getLocation();
  }, [longitude, latitude]);

  // Kakao 지도 HTML 생성
  // kakao.maps.Map -> 현재 위치를 중심으로 지도 초기화.
  const generateMapHtml = (latitude, longitude) => {
    return `
<div id="map" style="width:100%;height:100%;"></div>
<script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=8fa52e65538c46addf4210796470c767&libraries=services,drawing"></script>
<script> 
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places(map); 

// 카테고리로 은행을 검색합니다
var callback = function(result, status) {
alert(result);
    if (status == kakao.maps.services.Status.OK) {
        console.log(result);
    }
};
ps.keywordSearch('은행', callback);

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
        for (var i=0; i<data.length; i++) {
            displayMarker(data[i]);
        }
    } else {
     alert(data);
    }
}

// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
}
</script>

    `;
  };

  // WebView로 HTML 렌더링
  if (!latitude || !longitude || !htmlContent) {
    return null;
  }

  return <WebView source={{ html: htmlContent }} style={{ flex: 1 }} />;
}

// import React from 'react';
// import { WebView } from 'react-native-webview';

// const html = `
// <html>
//     <head>
//         <meta name="viewport" content="width=device-width, initial-scale=1">
//         <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=8fa52e65538c46addf4210796470c767&libraries=services"></script>
//     </head>
//     <body>
//         <div id="map" style="width:500px;height:400px;"></div>
//         <script type="text/javascript">
//             (function () {
//                 const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
//                 const options = {
//                     center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표
//                     level: 3 //지도의 레벨(확대, 축소 정도)
//                 };

//                 const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

//                 // 주소-좌표 변환 객체를 생성합니다
//                 const geocoder = new kakao.maps.services.Geocoder();

//                 // 특정 주소를 좌표로 변환합니다
//                 geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', function(result, status) {
//                     if (status === kakao.maps.services.Status.OK) {
//                         const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

//                         // 결과 좌표로 지도 중심을 이동합니다
//                         map.setCenter(coords);

//                         // 결과 좌표에 마커를 표시합니다
//                         const marker = new kakao.maps.Marker({
//                             map: map,
//                             position: coords
//                         });

//                         // 마커에 클릭 이벤트를 추가합니다
//                         kakao.maps.event.addListener(marker, 'click', function() {
//                             alert('주소: 제주특별자치도 제주시 첨단로 242');
//                         });
//                     } else {
//                         alert('주소 변환에 실패했습니다.');
//                     }
//                 });
//             })();
//         </script>
//     </body>
// </html>
// `;

// export default function FindAgent() {
//   return <WebView source={{ html: html }} />;
// }

// import React from 'react';
// import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
// import { WebView } from 'react-native-webview';
// import Config from 'react-native-config';
// import Constants from 'expo-constants';
// const { kakaoRedirectUri, kakaoClientId, serverUrl, kakaoJsKey } =
//   Constants.expoConfig.extra;

// console.log('KAKAO_REDIRECT_URI:', kakaoRedirectUri);
// console.log('KAKAO_CLIENT_ID:', kakaoClientId);
// console.log('SERVER_URL:', serverUrl);
// console.log('KAKAO_JS_KEY:', kakaoJsKey);

// const KakaoMap = () => {
//   const kakaoMapHtml = `
// <html>
// <head>
// 	<meta charset="utf-8"/>
// 	<title>Kakao 지도 시작하기</title>
// </head>
// <body>
// 	<div id="map" style="width:500px;height:400px;"></div>
// 	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=24ad20245abc106b6d6b5b2cf0fa530a"></script>
// 	<script>
// 		var container = document.getElementById('map');
// 		var options = {
// 			center: new kakao.maps.LatLng(33.450701, 126.570667),
// 			level: 3
// 		};

// 		var map = new kakao.maps.Map(container, options);
// 	</script>
// </body>
// </html>
// `;
//   // <!DOCTYPE html>
//   // <html>
//   //   <head>
//   //     <meta charset="utf-8">
//   //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   //     <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=bc10c03f8b9027e0c258a665ee26cc69&libraries=services"></script>
//   //     <style>
//   //       html, body { margin: 0; padding: 0; height: 100%; }
//   //       #map { width: 100%; height: 100%; }
//   //     </style>
//   //   </head>
//   //   <body>
//   //     <div id="map" style="width:300;height:600;"></div>
//   //     <script>
//   //       try {
//   //         // 지도 생성
//   //         var mapContainer = document.getElementById('map');
//   //         var mapOption = {
//   //           center: new kakao.maps.LatLng(37.5665, 126.9780),
//   //           level: 3
//   //         };
//   //         var map = new kakao.maps.Map(mapContainer, mapOption);

//   //         // 장소 검색
//   //         var ps = new kakao.maps.services.Places();
//   //         ps.keywordSearch('부동산 중개소', function(data, status) {
//   //           if (status === kakao.maps.services.Status.OK) {
//   //             data.forEach(place => {
//   //               var coords = new kakao.maps.LatLng(place.y, place.x);
//   //               var marker = new kakao.maps.Marker({
//   //                 map: map,
//   //                 position: coords
//   //               });
//   //             });
//   //           } else {
//   //             console.error('검색 결과 없음');
//   //           }
//   //         });
//   //       } catch (error) {
//   //         console.error('Error loading map:', error);
//   //       }
//   //     </script>
//   //   </body>
//   // </html>

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.mapContainer}>
//         <WebView
//           source={{ html: kakaoMapHtml }}
//           // style={styles.map}
//           //   domStorageEnabled={true}
//           //   javaScriptEnabled={true}
//           //   originWhitelist={['*']}
//           //   onMessage={event => {
//           //     console.log('WebView Message:', event.nativeEvent.data);
//           //   }
//           // }
//         />
//       </View>
//       {/* <View style={styles.infoBox}>
//         <Text style={styles.title}>참조은중개소</Text>
//         <View style={styles.details}>
//           <Text style={styles.address}>서울시 단풍로 44번길</Text>
//           <Text style={styles.phone}>031-1234-5678</Text>
//         </View>
//       </View> */}
//     </SafeAreaView>
//   );
// };

// export default KakaoMap;

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#ffffff',
//   //   justifyContent: 'center',
//   // },
//   // mapContainer: {
//   //   flex: 2,
//   //   borderBottomColor: '#000',
//   //   backgroundColor: '#fff',
//   // },
//   map: {
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//     alignContent: 'center',
//   },
//   infoBox: {
//     flex: 1,
//     alignSelf: 'center',
//     width: '90%',
//     padding: 20,
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 20,
//     margin: 10,
//     color: '#333',
//   },
//   details: {
//     backgroundColor: '#EDF0F5',
//     borderRadius: 10,
//     padding: 15,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     width: '90%',
//   },
//   address: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 5,
//     margin: 10,
//   },
//   phone: {
//     fontSize: 16,
//     color: '#868686',
//     margin: 10,
//   },
// });
