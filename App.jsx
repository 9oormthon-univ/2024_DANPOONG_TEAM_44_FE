import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/navigation/BottomTabs';
import LoginSignupStack from './src/navigation/stack/LoginSignupStack';
import Splash from './src/screens/Splash';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      // 카카오 로그인 구현 시 수정 (현재는 임시로 true로 설정)
      setIsAuthenticated(true);
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
