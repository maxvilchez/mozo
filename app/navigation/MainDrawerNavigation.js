import {
  createStackNavigator
} from 'react-navigation';

import IndexScren from '../screens/IndexScreen';

const IndexStack = createStackNavigator({
  Index: IndexScren,
}, {
  defaultNavigationOptions: {
    title: 'Scanea el codigo QR',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#000',
    },
  },
});

export default IndexStack;
