import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage 추가
import BottomTabs from './src/navigation/BottomTabs';
import LoginSignupStack from './src/navigation/stack/LoginSignupStack';
import Splash from './src/screens/Splash';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [splashVisible, setSplashVisible] = useState(true);

  // 폰트 로드
  useFonts({
    'SpoqaHanSansNeo-Bold': require('./src/assets/fonts/SpoqaHanSansNeo-Bold.ttf'),
    'SpoqaHanSansNeo-Medium': require('./src/assets/fonts/SpoqaHanSansNeo-Medium.ttf'),
    'SpoqaHanSansNeo-Regular': require('./src/assets/fonts/SpoqaHanSansNeo-Regular.ttf'),
  });

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // AsyncStorage에서 인증 코드 확인
        const authCode = await AsyncStorage.getItem('kakaoAuthCode');
        console.log('저장된 인증 코드:', authCode);
        if (authCode) {
          setIsAuthenticated(true); // 인증 코드가 있으면 인증 상태로 설정
        } else {
          setIsAuthenticated(false); // 인증 코드가 없으면 비인증 상태
        }
      } catch (error) {
        console.error('인증 상태 확인 중 오류:', error);
        setIsAuthenticated(false);
      } finally {
        setSplashVisible(false); // 스플래시 종료
      }
    };
    checkAuthStatus();
  }, []);

  if (splashVisible) {
    return <Splash onSplashEnd={() => setSplashVisible(false)} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="MainTabs" component={BottomTabs} />
        ) : (
          <Stack.Screen name="LoginSignup" component={LoginSignupStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
