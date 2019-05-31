import {
  createStackNavigator
} from 'react-navigation';

import OrderStatusScreen from '../screens/OrderStatusScreen';

const OrderStack = createStackNavigator({
  OrderStatus: OrderStatusScreen,
});

export default OrderStack;
