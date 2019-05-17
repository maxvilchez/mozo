import {
  FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, FETCHING_DATA_MENU_SUCCESS
} from '../constants';
import fetchMenu from '../api';

export const getData = () => ({ type: FETCHING_DATA });

export const getDataSuccess = data => ({ type: FETCHING_DATA_SUCCESS, data });

export const getDateMenu = () => ({ type: FETCHING_DATA_FAILURE });

export const getDataMenuSuccess = dataMenu => ({ type: FETCHING_DATA_MENU_SUCCESS, dataMenu: dataMenu.businesses });

export const fetchData = () => (dispatch) => {
  dispatch(getData());
  fetchMenu()
    .then(([, json]) => {
      dispatch(getDataMenuSuccess(json));
    })
    .catch(error => console.log(error));
};
