import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, FavoriteHomes, RealEstateInfo, BuildingRegister, BuildingInfo } from '../../screens/home/index';
import { BackIcon } from '../../assets/icons/iconSvg';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { fontSize: 24 },
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
        options={({ navigation }) => ({
          title: '부동산 정보',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="BuildingRegister"
        component={BuildingRegister}
        options={({ navigation }) => ({
          title: '건축물대장표제부',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
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
    </Stack.Navigator>
  );
}

export default HomeStack;
