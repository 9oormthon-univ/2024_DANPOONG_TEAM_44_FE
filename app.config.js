import 'dotenv/config';

export default {
  expo: {
    name: 'ZipCock',
    version: '1.0.0',
    extra: {
      kakaoRedirectUri: process.env.KAKAO_REDIRECT_URI,
      kakaoClientId: process.env.KAKAO_CLIENT_ID,
      serverUrl: process.env.SERVER_URL,
      kakaoJsKey: process.env.KAKAO_JS_KEY,
    },
    ios: {
      newArchEnabled: true,
      bundleIdentifier: 'com.zipcock.app',
      infoPlist: {
        NSAppTransportSecurity: {
          NSAllowsArbitraryLoads: true, // 모든 네트워크 요청 허용
        },
      },
    },
    android: {
      newArchEnabled: true,
    },
  },
};
