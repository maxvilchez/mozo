import { combineReducers } from 'redux';
import menusReducers from './menus.reducers';
import detailReducers from './detail.reducers';
import cartReducers from './cart.reducers';
import orderReducers from './order.reducers';

export default combineReducers({
  data: menusReducers, // cambiar a products
  dataDetail: detailReducers, // cambiar a detail
  cart: cartReducers,
  order: orderReducers
});
