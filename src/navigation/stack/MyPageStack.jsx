import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  MyPage,
  MyChat,
  MyPost,
  AreaSetting,
} from '../../screens/myPage/index';
import { ViewPost, Chat } from '../../screens/community';

const Stack = createNativeStackNavigator();

function MyPageStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerBackVisible: false,
      }}
    >
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AreaSetting"
        component={AreaSetting}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyChat"
        component={MyChat}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyPost"
        component={MyPost}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ViewPost"
        component={ViewPost}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MyPageStack;
