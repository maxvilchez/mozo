import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import OrdenScreen from '../screens/OrdenScreen';
import DetailScreen from '../screens/DetailScreen';
import ListDetailsScreen from '../screens/ListDetailsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  ListDetails: ListDetailsScreen,
  Detail: DetailScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Inicio',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  )
};

const OrdenStack = createStackNavigator({
  Orden: OrdenScreen
});

OrdenStack.navigationOptions = {
  tabBarLabel: 'Mi pedido',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-list${focused ? '' : '-box'}`
          : 'md-list-box'
      }
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  OrdenStack
});
