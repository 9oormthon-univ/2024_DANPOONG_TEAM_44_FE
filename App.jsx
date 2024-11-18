import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/navigation/BottomTabs';
import LoginSignupStack from './src/navigation/stack/LoginSignupStack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      // 임시 연결 true: 로그인 완료(홈화면으로) false: 로그인 미완료(Start 화면으로)
      setIsAuthenticated(true);
    };
    checkAuthStatus();
  }, []);

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
