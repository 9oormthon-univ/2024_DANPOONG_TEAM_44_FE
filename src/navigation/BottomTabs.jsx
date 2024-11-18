import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeStack,
  HouseInfoStack,
  CommunityStack,
  MyPageStack,
} from './stack/index';
import HomeIcon from '../assets/icons/homeIcon';
import HouseInfoIcon from '../assets/icons/houseInfoIcon';
import CommunityIcon from '../assets/icons/communityIcon';
import MyPageIcon from '../assets/icons/myPageIcon';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabel: '',
        tabBarStyle: {
          height: '10%',
          borderTopColor: 'transparent',
          shadowColor: 'transparent',
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: 'white',
        },
        tabBarIconStyle: {
          marginVertical: 15,
        },
        tabBarButton: props => (
          <TouchableOpacity {...props}>
            <View>{props.children}</View>
          </TouchableOpacity>
        ),
      }}
    >
      <Tab.Screen
        name="홈"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="집정보"
        component={HouseInfoStack}
        options={{
          tabBarIcon: ({ color }) => <HouseInfoIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="커뮤니티"
        component={CommunityStack}
        options={{
          tabBarIcon: ({ color }) => <CommunityIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={MyPageStack}
        options={{
          tabBarIcon: ({ color }) => <MyPageIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

BottomTabs.propTypes = {
  children: PropTypes.node,
};

export default BottomTabs;
