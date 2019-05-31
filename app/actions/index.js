import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  FETCHING_DATA_MENU_SUCCESS,
  FETCHING_DATA_MENU_DETAIL_SUCCESS,
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  ADD_ORDER,
  CHANGE_PAYMENT,
} from '../constants';
import { fetchMenu, fetchMenuDetail } from '../api';

export const getData = () => ({ type: FETCHING_DATA });

export const getDataSuccess = data => ({ type: FETCHING_DATA_SUCCESS, data });

export const getDateMenu = () => ({ type: FETCHING_DATA_FAILURE });

export const getDataMenuSuccess = dataMenu => ({ type: FETCHING_DATA_MENU_SUCCESS, dataMenu: dataMenu.businesses });

export const getDataMenuDetailSuccess = dataDetail => ({ type: FETCHING_DATA_MENU_DETAIL_SUCCESS, dataDetail });

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
