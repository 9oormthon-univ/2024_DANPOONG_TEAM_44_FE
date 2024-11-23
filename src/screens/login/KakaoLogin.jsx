import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { WebView } from 'react-native-webview';
import Config from 'react-native-config'; // 환경변수 사용
import PropTypes from 'prop-types';

const KakaoLogin = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  const handleWebViewNavigationStateChange = navState => {
    const { url } = navState;

    // 리다이렉트 URL에서 인증 코드 추출
    if (url.includes('code=')) {
      const code = url.split('code=')[1].split('&')[0]; // 인증 코드 추출
      console.log('카카오 인증 코드:', code);

      // 백엔드에서 리다이렉트된 URL 처리 시 바로 성공으로 이동
      Alert.alert('로그인 성공', '카카오 로그인 완료');
      navigation.navigate('Home'); // 홈 화면으로 이동
    } else if (url.includes('error=')) {
      // 오류 처리
      const error = url.split('error=')[1].split('&')[0];
      console.error('카카오 로그인 오류:', error);
      Alert.alert('로그인 실패', '카카오 인증 중 문제가 발생했습니다.');
    }
  };

  KakaoLogin.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <ActivityIndicator
          size="large"
          color="#007AFF"
          style={styles.loadingIndicator}
        />
      )}
      <WebView
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=9dbc3d5d8ee22e7d81f67e6867fcace6&redirect_uri=http://52.78.38.237/getInfo`,
        }}
        onLoadEnd={() => setLoading(false)}
        onNavigationStateChange={handleWebViewNavigationStateChange}
        style={styles.webview}
      />
    </SafeAreaView>
  );
};

export default KakaoLogin;

// const KakaoLogin = ({ navigation }) => {
//   const [loading, setLoading] = useState(true);
//   // const navigation = useNavigation();

//   const handleWebViewNavigationStateChange = navState => {
//     const { url } = navState;

//     // 리다이렉트 URL에서 code 추출
//     if (url.includes('code=')) {
//       const code = url.split('code=')[1];
//       console.log('카카오 인증 코드:', code);
//       // {Config.SERVER_URL}/kakao-login
//       // https://kauth.kakao.com/oauth/authorize
//       // 백엔드로 인증 코드 전달 로직
//       fetch(`https://kauth.kakao.com/oauth/authorize`, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ code }),
//       })
//         .then(response => {
//           if (response.ok) {
//             Alert.alert('로그인 성공', '카카오 로그인 완료');
//             navigation.navigate('Home'); // 홈 화면으로 이동
//           } else {
//             throw new Error('서버 응답 오류');
//           }
//         })
//         .catch(error => {
//           console.error('백엔드 요청 오류:', error);
//           Alert.alert('로그인 실패', '서버와의 통신 중 오류가 발생했습니다.');
//         });
//     }
//   };

//   KakaoLogin.propTypes = {
//     navigation: PropTypes.shape({
//       navigate: PropTypes.func.isRequired,
//     }).isRequired,
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       {loading && (
//         <ActivityIndicator
//           size="large"
//           color="#007AFF"
//           style={styles.loadingIndicator}
//         />
//       )}
//       <WebView
//         source={{
//           uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=64c2d6d6edead9f90810f8033e950c87
// &redirect_uri=http://52.78.38.237/getInfo`,
//         }}
//         onLoadEnd={() => setLoading(false)}
//         onNavigationStateChange={handleWebViewNavigationStateChange}
//         style={styles.webview}
//       />
//     </SafeAreaView>
//   );
// };

// export default KakaoLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  webview: {
    flex: 1,
  },
  loadingIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -20 }, { translateY: -20 }],
    zIndex: 1,
  },
});

// import React from 'react';
// import { SafeAreaView } from 'react-native';
// import { WebView } from 'react-native-webview';
// import Config from 'react-native-config';

// const KakaoLogin = () => {
//   const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${Config.KAKAO_CLIENT_ID}&redirect_uri=${Config.KAKAO_REDIRECT_URI}`;

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <WebView
//         source={{ uri: kakaoAuthUrl }}
//         javaScriptEnabled={true}
//         originWhitelist={['*']}
//         style={{ flex: 1 }}
//       />
//     </SafeAreaView>
//   );
// };

// export default KakaoLogin;
