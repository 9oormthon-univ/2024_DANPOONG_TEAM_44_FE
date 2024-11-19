import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/navigation/BottomTabs';
import LoginSignupStack from './src/navigation/stack/LoginSignupStack';

const Stack = createNativeStackNavigator();

// const SplashScreen = ({ onFinish }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onFinish(); // 3초 후에 호출
//     }, 3000);

//     return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 정리
//   }, []);

//   return (
//     <View style={styles.splashContainer}>
//       <Image
//         source={require('../assets/splash.png')} // 스플래시 이미지 경로
//         style={styles.splashImage}
//       />
//     </View>
//   );
// };

export default function App() {
  // const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      // 임시 연결 true: 로그인 완료(홈화면으로) false: 로그인 미완료(Start 화면으로)
      setIsAuthenticated(false);
    };
    checkAuthStatus();
  }, []);
  
  // if (isSplashVisible) {
  //   return <SplashScreen onFinish={() => setIsSplashVisible(false)} />;
  // }

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

// splash style 
// const styles = StyleSheet.create({
//   splashContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff', // 배경색 설정
//   },
//   splashImage: {
//     width: 200, // 이미지 너비
//     height: 200, // 이미지 높이
//     resizeMode: 'contain', // 이미지 크기 조정
//   },
// });