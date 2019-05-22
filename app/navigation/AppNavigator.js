import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import MainDrawerNavigation from './MainDrawerNavigation';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Index: MainDrawerNavigation,
    Main: MainTabNavigator
  })
);
