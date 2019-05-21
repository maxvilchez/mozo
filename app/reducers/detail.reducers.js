import {
  FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, FETCHING_DATA_MENU_DETAIL_SUCCESS
} from '../constants';

const initialState = {
  data: [],
  isFeching: false,
  error: false,
  detail: {},
};

const detailReducer = (state = initialState, action) => {
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
    case FETCHING_DATA_MENU_DETAIL_SUCCESS:
      return {
        ...state,
        detail: action.dataDetail,
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

export default detailReducer;
