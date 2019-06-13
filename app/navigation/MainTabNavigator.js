import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';
import DetailScreen from '../screens/DetailScreen';
import ListDetailsScreen from '../screens/ListDetailsScreen';
import SearchScren from '../screens/SearchScreen';
import OrderCheckoutScreen from '../screens/OrderCheckoutScreen';
import CategoryDetailScreen from '../screens/CategoryDetailScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  ListDetails: ListDetailsScreen,
  Detail: DetailScreen,
  Search: SearchScren,
  CategoryDetail: CategoryDetailScreen,
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
  Order: OrderScreen,
  OrderCheckout: OrderCheckoutScreen,
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
