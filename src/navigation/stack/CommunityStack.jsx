import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Community,
  SearchPost,
  WritePost,
  ViewPost,
  PlaceUpload,
  Chat,
} from '../../screens/community/index';

const Stack = createNativeStackNavigator();

function CommunityStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerBackVisible: false,
      }}
    >
      <Stack.Screen
        name="Community"
        component={Community}
        options={{
          title: '',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SearchPost"
        component={SearchPost}
        options={{
          title: '',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="WritePost"
        component={WritePost}
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
        name="PlaceUpload"
        component={PlaceUpload}
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

export default CommunityStack;
