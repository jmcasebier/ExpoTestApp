import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Test1 from '../screens/Test1';
import InfoScreen from '../screens/InfoScreen';
import Test2 from '../screens/Test2';
import Test3 from '../screens/Test3';

const LocationStack = createStackNavigator({
  Location: Test1,
});

LocationStack.navigationOptions = {
  tabBarLabel: 'Test 1',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-clipboard'}
    />
  ),
};

const InfoStack = createStackNavigator({
  Info: InfoScreen,
});

InfoStack.navigationOptions = {
  tabBarLabel: 'Information',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-information-circle-outline'}
    />
  ),
};

const VideoStack = createStackNavigator({
  Video: Test2,
});

VideoStack.navigationOptions = {
  tabBarLabel: 'Test 2',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-clipboard'}
    />
  ),
};

const WebStack = createStackNavigator({
  Web: Test3,
});

WebStack.navigationOptions = {
  tabBarLabel: 'Test 3',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-clipboard'}
    />
  ),
};

export default createBottomTabNavigator({
  InfoStack,
  LocationStack,
  VideoStack,
  WebStack,
});
