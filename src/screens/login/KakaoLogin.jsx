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
  // const navigation = useNavigation();

  const handleWebViewNavigationStateChange = navState => {
    const { url } = navState;

    // 리다이렉트 URL에서 code 추출
    if (url.includes('code=')) {
      const code = url.split('code=')[1];
      console.log('카카오 인증 코드:', code);

      // 백엔드로 인증 코드 전달 로직
      fetch(`${Config.SERVER_URL}/kakao-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      })
        .then(response => {
          if (response.ok) {
            Alert.alert('로그인 성공', '카카오 로그인 완료');
            navigation.navigate('Home'); // 홈 화면으로 이동
          } else {
            throw new Error('서버 응답 오류');
          }
        })
        .catch(error => {
          console.error('백엔드 요청 오류:', error);
          Alert.alert('로그인 실패', '서버와의 통신 중 오류가 발생했습니다.');
        });
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
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${Config.KAKAO_CLIENT_ID}&redirect_uri=${Config.KAKAO_REDIRECT_URI}`,
        }}
        onLoadEnd={() => setLoading(false)}
        onNavigationStateChange={handleWebViewNavigationStateChange}
        style={styles.webview}
      />
    </SafeAreaView>
  );
};

export default KakaoLogin;

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
