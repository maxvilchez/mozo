import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,

  FETCHING_DATA_MENU_SUCCESS,
  FETCHING_DATA_MENU_DETAIL_SUCCESS,

  FETCHING_DATA_CATEGORY_SUCCESS,
  FETCHING_DATA_CATEGORY_DETAIL_SUCCESS,

  FETCHING_DATA_SEARCH_SUCCESS,

  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  ADD_ORDER,
  CHANGE_PAYMENT,
} from '../constants';
import { fetchMenu, fetchMenuDetail, fetchCategories, fetchCategoryDetail, fetchSearchProducts } from '../api';

export const getData = () => ({ type: FETCHING_DATA });

export const getDataSuccess = data => ({ type: FETCHING_DATA_SUCCESS, data });

export const getDateMenu = () => ({ type: FETCHING_DATA_FAILURE });

export const getDataMenuSuccess = dataMenu => ({ type: FETCHING_DATA_MENU_SUCCESS, dataMenu });
export const getDataMenuDetailSuccess = dataMenuDetail => ({ type: FETCHING_DATA_MENU_DETAIL_SUCCESS, dataMenuDetail });

export const getDataCategorySuccess = dataCategory  => ({ type: FETCHING_DATA_CATEGORY_SUCCESS, dataCategory });
export const getDataCategoryDetailSuccess = dataCategoryDetail  => ({ type: FETCHING_DATA_CATEGORY_DETAIL_SUCCESS, dataCategoryDetail });

export const getDataSearchSuccess = dataSearch  => ({ type: FETCHING_DATA_SEARCH_SUCCESS, dataSearch });

export const fetchData = () => (dispatch) => {
  dispatch(getData());
  fetchMenu()
    .then(([, json]) => {
      dispatch(getDataMenuSuccess(json));
    })
    .catch(error => console.log(error));
};

export const fetchDataDetail = id => (dispatch) => {
  dispatch(getData());
  fetchMenuDetail(id)
    .then(([, json]) => {
      dispatch(getDataMenuDetailSuccess(json));
    })
    .catch(error => console.log(error));
};

// categories

export const fetchDataCategories = () => (dispatch) => {
  dispatch(getData());
  fetchCategories()
    .then(([, json]) => {
      dispatch(getDataCategorySuccess(json));
    })
    .catch(error => console.log(error));
}

export const fetchDataCategoriesDetail = id => (dispatch) => {
  dispatch(getData());
  fetchCategoryDetail(id)
    .then(([, json]) => {
      dispatch(getDataCategoryDetailSuccess(json));
    })
    .catch(error => console.log(error));
};

// searchs

export const fetchDataSearch = name => (dispatch) => {
  dispatch(getData());
  fetchSearchProducts(name)
    .then(([, json]) => {
      dispatch(getDataSearchSuccess(json));
    })
    .catch(error => console.log(error));
};

// shopping cart

export const addToCart = item => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: item
  });
};

export const removeFromCart = item => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: item
  });
};

export const emptyCart = () => (dispatch) => {
  dispatch({
    type: EMPTY_CART
  });
};

// order

export const addOrder = item => (dispatch) => {
  dispatch({
    type: ADD_ORDER,
    payload: item
  });
};

export const changePayment = payment => (dispatch) => {
  dispatch({
    type: CHANGE_PAYMENT,
    payment
  });
};
