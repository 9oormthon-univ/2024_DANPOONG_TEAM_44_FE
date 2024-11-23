import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
// import { login as kakaoLogin, logout as kakaoLogout } from '@react-native-seoul/kakao-login';
// import { login as kakaoLogin } from '@react-native-seoul/kakao-login';
// import axios from 'axios';
// import Config from 'react-native-config';

const Start = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/zip_logo.png')} />
      </View>

      <TouchableOpacity
        style={styles.kakaoButton}
        onPress={() => navigation.navigate('KakaoLogin')}
      >
        {/* 카카오 로그인 버튼 이미지  */}
        <Image
          source={require('../assets/kakao_login_medium_wide.png')} // 이미지 파일 경로
          style={styles.kakaoButtonImage}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.defaultLoginButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.defaultLoginButtonText}>집콕에서 로그인</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>아직 회원이 아니신가요?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignupNickname')}>
          <Text style={styles.signupText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

Start.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF', // 배경색 파란색
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 160, // 아이콘 밑 공백
    marginTop: 50, // 아이콘 위 공백
    alignItems: 'center',
  },
  defaultLoginButton: {
    backgroundColor: '#BADDFF', // 버튼 색상
    width: '77.5%', // 버튼 가로비율
    height: 45,
    paddingVertical: 12,
    borderRadius: 12, // 카카오 버튼 맞춰서 12로 일단 변경
    alignItems: 'center',
    marginTop: 20, // 버튼 간 간격
    marginBottom: 80,
  },
  defaultLoginButtonText: {
    color: '#4D4D4D',
    fontSize: 14.5,
    fontWeight: 'bold',
    marginLeft: 14,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
  signupText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 15, // 회원이 아니신가요? 와 회원가입 사이 공백
  },
});
