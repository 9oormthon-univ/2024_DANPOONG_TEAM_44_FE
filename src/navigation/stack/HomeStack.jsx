import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Home,
  FavoriteHomes,
  RealEstateInfo,
  BuildingRegister,
  BuildingInfo,
} from '../../screens/home/index';

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
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FavoriteHomes"
        component={FavoriteHomes}
        options={{
          title: '',
          headerShown: false,
        }}
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
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
