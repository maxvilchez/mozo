import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  FETCHING_DATA_CATEGORY_SUCCESS,
  FETCHING_DATA_CATEGORY_DETAIL_SUCCESS,
} from '../constants';

const initialState = {
  data: [],
  listCategories: [],
  details: [],
  isFeching: false,
  error: false,
};

const categoriesReducer = (state = initialState, action) => {
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
    case FETCHING_DATA_CATEGORY_SUCCESS:
      return {
        ...state,
        listCategories: action.dataCategory,
        isFeching: false
      };
    case FETCHING_DATA_CATEGORY_DETAIL_SUCCESS:
      return {
        ...state,
        details: action.dataCategoryDetail,
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

export default categoriesReducer;
