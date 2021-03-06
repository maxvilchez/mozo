import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  FETCHING_DATA_MENU_SUCCESS,
  FETCHING_DATA_MENU_DETAIL_SUCCESS,
} from '../constants';

const initialState = {
  data: [],
  isFeching: false,
  error: false,
  listProducts: [],
  details: {},
  productToday: {},
};

const menusReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFeching: true
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFeching: false
      };
    case FETCHING_DATA_MENU_SUCCESS:

      const products = action.dataMenu;
      var product = {};

      products.map(d => {
        if(d.plato_del_dia == 1) {
          product = d;
        }
      });

      return {
        ...state,
        listProducts: products,
        productToday: product,
        isFeching: false
      };

    case FETCHING_DATA_MENU_DETAIL_SUCCESS:
      return {
        ...state,
        details: action.dataMenuDetail,
        isFeching: false
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFeching: false,
        error: true
      };
    default:
      return state;
  }
};

export default menusReducer;
