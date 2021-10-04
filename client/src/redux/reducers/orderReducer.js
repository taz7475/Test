/** @format */

import { ADD_TO_ORDERS, ALL_ORDERS } from "../constants/orderConstants";

const CART_INITIAL_STATE = {
  cart : localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  products : null
};

export const orderReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_ORDERS:
        return {...state, 
        products : state.cart}
    case ALL_ORDERS:
        
        return {...state, 
        products: action.payload}
    default:
      return state;
  }
};
