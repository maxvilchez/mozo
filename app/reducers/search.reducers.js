import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  FETCHING_DATA_SEARCH_SUCCESS,
} from '../constants';

const initialState = {
  data: [],
  listResults: [],
  isFeching: false,
  error: false,
};

const searchReducer = (state = initialState, action) => {
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
    case FETCHING_DATA_SEARCH_SUCCESS:
      return {
        ...state,
        listResults: action.dataSearch,
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

export default searchReducer;
