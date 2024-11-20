import React, { useState } from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Community,
  WritePost,
  ViewPost,
  Chat,
} from '../../screens/community/index';
import LeaveChat from '../../components/modal/LeaveChat';
import { BackIcon, WriteIcon, LeaveIcon } from '../../assets/icons/iconSvg';

const Stack = createNativeStackNavigator();

function CommunityStack() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentNavigation, setCurrentNavigation] = useState(null);

  const handleLeave = () => {
    if (currentNavigation) {
      setModalVisible(false);
      currentNavigation.goBack();
    }
  };

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: { fontSize: 24 },
          headerShadowVisible: false,
          headerBackVisible: false,
        }}
      >
        <Stack.Screen
          name="Community"
          component={Community}
          options={({ navigation }) => ({
            title: '커뮤니티',
            headerTitleAlign: 'left',
            headerRight: () => (
              <View style={{ marginRight: 10 }}>
                <WriteIcon onPress={() => navigation.navigate('WritePost')} />
              </View>
            ),
          })}
        />

        <Stack.Screen
          name="WritePost"
          component={WritePost}
          options={({ navigation }) => ({
            title: '',
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
            headerTitleAlign: 'center',
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
                <LeaveIcon
                  onPress={() => {
                    setCurrentNavigation(navigation);
                    setModalVisible(true);
                  }}
                />
              </View>
            ),
          })}
        />
      </Stack.Navigator>
      <LeaveChat
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onLeave={handleLeave}
      />
    </>
  );
}

export default CommunityStack;
