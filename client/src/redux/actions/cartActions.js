import * as actionTypes from '../constants/cartConctants'
import axios from "axios";
import { prefixe } from '../../helpers/constant';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`${prefixe}/api/Products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  console.log(data)

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};