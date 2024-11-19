import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from '../../screens/Start';
import Login from '../../screens/login/Login';
import { Signup, SignupArea, SignupNickname } from '../../screens/signup/index';
import { BackIcon } from '../../assets/icons/iconSvg';

const Stack = createNativeStackNavigator();

function LoginSignupStack() {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerTitleStyle: { fontSize: 24 },
        headerShadowVisible: false,
        headerBackVisible: false,
      }}
    >
      <Stack.Screen
        name="Start"
        component={Start}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({
          title: '',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={({ navigation }) => ({
          title: '',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="SignupNickname"
        component={SignupNickname}
        options={({ navigation }) => ({
          title: '',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="SignupArea"
        component={SignupArea}
        options={({ navigation }) => ({
          title: '',
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

export default LoginSignupStack;
