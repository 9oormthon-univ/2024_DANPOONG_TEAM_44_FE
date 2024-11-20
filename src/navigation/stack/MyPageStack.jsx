import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  MyPage,
  MyChat,
  MyPost,
  AreaSetting,
} from '../../screens/myPage/index';
import { ViewPost, Chat } from '../../screens/community';
import { BackIcon, LeaveIcon } from '../../assets/icons/iconSvg';

const Stack = createNativeStackNavigator();

function MyPageStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { fontSize: 24 },
        headerShadowVisible: false,
        headerBackVisible: false,
      }}
    >
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{
          title: '내 정보',
          headerTitleAlign: 'left',
        }}
      />
      <Stack.Screen
        name="AreaSetting"
        component={AreaSetting}
        options={({ navigation }) => ({
          title: '',
          headerLeft: () => (
            <View style={{ padding: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="MyChat"
        component={MyChat}
        options={({ navigation }) => ({
          title: '내 채팅',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{ padding: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="MyPost"
        component={MyPost}
        options={({ navigation }) => ({
          title: '내가 쓴 글',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="ViewPost"
        component={ViewPost}
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
        name="Chat"
        component={Chat}
        options={({ navigation, route }) => ({
          title: route.params?.author || '사용자명',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          ),
          headerRight: () => (
            <View style={{ marginTop: 7 }}>
              <LeaveIcon onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default MyPageStack;
