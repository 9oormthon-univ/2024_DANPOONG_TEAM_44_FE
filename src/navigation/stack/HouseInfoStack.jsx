import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HouseInfo,
  FindAgent,
  MarketPriceCheck,
  Apartment,
  MultiFamily,
  OfficeTel,
  RentCalculate,
  CalculateResult,
  ApartmentInfo,
  ApartmentResult,
} from '../../screens/houseInfo/index';
import { BackIcon } from '../../assets/icons/iconSvg';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
      <Stack.Screen
        name="Apartment"
        component={Apartment}
        options={({ navigation }) => ({
          title: '아파트',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="ApartmentInfo"
        component={ApartmentInfo}
        options={({ navigation }) => ({
          title: '아파트시세',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="ApartmentResult"
        component={ApartmentResult}
        options={({ navigation }) => ({
          title: '아파트시세',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('HouseInfo')}
              >
                {/* 아이콘 변경 */}
                <Icon name="home" size={24} color="#000" />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="MultiFamily"
        component={MultiFamily}
        options={({ navigation }) => ({
          title: '다세대',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="OfficeTel"
        component={OfficeTel}
        options={({ navigation }) => ({
          title: '오피스텔',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="RentCalculate"
        component={RentCalculate}
        options={({ navigation }) => ({
          title: '계산기',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="CalculateResult"
        component={CalculateResult}
        options={({ navigation }) => ({
          title: '계산기',
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
