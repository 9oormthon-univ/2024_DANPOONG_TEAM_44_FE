import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HouseInfo,
  FindAgent,
  MarketPriceCheck,
} from '../../screens/houseInfo/index';
import { BackIcon } from '../../assets/icons/iconSvg';

const Stack = createNativeStackNavigator();

function HouseInfoStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { fontSize: 24 },
        headerShadowVisible: false,
        headerBackVisible: false,
      }}
    >
      <Stack.Screen
        name="HouseInfo"
        component={HouseInfo}
        options={{
          title: '집 정보',
          headerTitleAlign: 'left',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FindAgent"
        component={FindAgent}
        options={({ navigation }) => ({
          title: '주변 중개소 찾기',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="MarketPriceCheck"
        component={MarketPriceCheck}
        options={({ navigation }) => ({
          title: '시세 조회',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default HouseInfoStack;
