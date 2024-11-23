import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HouseInfo,
  FindAgent,
  MarketPriceCheck,
  Apartment,
  MultiFamily,
  MultiFamilyInfo,
  MultiFamilyResult,
  OfficeTel,
  OfficeTelInfo,
  OfficeTelResult,
  RentCalculate,
  CalculateResult,
  ApartmentInfo,
  ApartmentResult,
} from '../../screens/houseInfo/index';

const Stack = createNativeStackNavigator();

function HouseInfoStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerBackVisible: false,
      }}
    >
      <Stack.Screen
        name="HouseInfo"
        component={HouseInfo}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FindAgent"
        component={FindAgent}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MarketPriceCheck"
        component={MarketPriceCheck}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Apartment"
        component={Apartment}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ApartmentInfo"
        component={ApartmentInfo}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ApartmentResult"
        component={ApartmentResult}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MultiFamily"
        component={MultiFamily}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MultiFamilyInfo"
        component={MultiFamilyInfo}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MultiFamilyResult"
        component={MultiFamilyResult}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OfficeTel"
        component={OfficeTel}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OfficeTelInfo"
        component={OfficeTelInfo}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OfficeTelResult"
        component={OfficeTelResult}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RentCalculate"
        component={RentCalculate}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CalculateResult"
        component={CalculateResult}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default HouseInfoStack;
