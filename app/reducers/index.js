import { combineReducers } from 'redux';
import menusReducer from './menus.reducers';
import detailReducer from './detail.reducers';
import cartReducer from './cart.reducers';

export default combineReducers({
  data: menusReducer,
  dataDetail: detailReducer,
  cart: cartReducer,
});
