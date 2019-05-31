import { ADD_ORDER, CHANGE_PAYMENT } from '../constants';

const initialState = {
  table: '',
  username: '',
  time: '',
  payment: 'cash',
};

const OrderReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        table: action.payload.table,
        username: action.payload.username,
        time: action.payload.time,
      };
    case CHANGE_PAYMENT:
      return {
        ...state,
        payment: action.payment,
      };
    default:
      return state;
  }
};

export default OrderReducers;
