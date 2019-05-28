import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from '../constants';

const initialState = {
  cart: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [action.payload, ...state.cart],
        total: state.total + action.payload.price,
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
        total: 0,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item, i) => i !== action.payload.id),
        total: state.total - action.payload.item.price
      };
    default:
      return state;
  }
};

export default cartReducer;
