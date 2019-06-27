import { combineReducers } from 'redux';
import menusReducers from './menus.reducers';
import cartReducers from './cart.reducers';
import orderReducers from './order.reducers';
import categoriesReducer from './categories.reducers';
import searchReducer from './search.reducers';

export default combineReducers({
  products: menusReducers,
  cart: cartReducers,
  order: orderReducers,
  categories: categoriesReducer,
  results: searchReducer,
});
