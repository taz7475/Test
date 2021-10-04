/** @format */

import axios from "axios";
import { prefixe } from "../../helpers/constant";
import {
  clearError,
  setError,
  startLoading,
  stopLoading,
} from "./appStateActions";
import { getProfile } from "./authActions";
import { ADD_TO_ORDERS, ALL_ORDERS } from "../constants/orderConstants";

export const addorder = (userId, cartItems) => async dispatch => {
  dispatch(clearError());
  dispatch(startLoading("order"));
  const info = {
    owner: userId,
    products: cartItems.map(item => item.product),
  };
  console.log(info);
  try {
    const res = await axios.post(`${prefixe}/api/order/addorder`, info);
    dispatch({
      type: ADD_TO_ORDERS,
      payload: res.data,
    });
    dispatch(stopLoading());
    dispatch(getProfile());
  } catch (err) {
    dispatch(setError(err.response.data.errors));
    dispatch(stopLoading());
  }
};

export const getUserOrders = () => async dispatch => {
  try {
    const { data } = await axios.get(`${prefixe}/api/order/userorders`, {
      headers: { "auth-token": localStorage.getItem("token") },
    });

    dispatch({
      type: ALL_ORDERS,
      payload: data,
    });
  } catch (error) {
    dispatch(setError(error.response.data.errors));
    dispatch(stopLoading());
  }
};
