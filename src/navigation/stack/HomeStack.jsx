import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Home,
  FavoriteHomes,
  RealEstateInfo,
  BuildingRegister,
  BuildingInfo,
  RealEstateCaution,
  RealEstateTest,
  RealEstateResult,
  RealEstateTestInfo,
} from '../../screens/home/index';
import { BackIcon } from '../../assets/icons/iconSvg';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: 24,
          fontFamily: 'SpoqaHanSansNeo-Medium',
        },
        headerShadowVisible: false,
        headerBackVisible: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: '홈',
          headerTitleAlign: 'left',
        }}
      />
      <Stack.Screen
        name="FavoriteHomes"
        component={FavoriteHomes}
        options={({ navigation }) => ({
          title: '내가 찜한 집',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="RealEstateInfo"
        component={RealEstateInfo}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildingRegister"
        component={BuildingRegister}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildingInfo"
        component={BuildingInfo}
        options={({ navigation }) => ({
          title: '건물정보',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="RealEstateCaution"
        component={RealEstateCaution}
        options={({ navigation }) => ({
          title: 'RealEstateCaution',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="RealEstateTest"
        component={RealEstateTest}
        options={({ navigation }) => ({
          title: 'RealEstateInfo',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="RealEstateTestInfo"
        component={RealEstateTestInfo}
        options={({ navigation }) => ({
          title: 'RealEstateTestInfo',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="RealEstateResult"
        component={RealEstateResult}
        options={({ navigation }) => ({
          title: 'RealEstateResult',
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

export default HomeStack;
