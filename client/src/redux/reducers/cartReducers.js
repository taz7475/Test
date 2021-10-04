import * as actionTypes from '../constants/cartConctants'

const CART_INITIAL_STATE = {
    cartItems:  localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  
  };

export const cartReducer = (state= CART_INITIAL_STATE, action ) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:

            const item= action.payload;

            const existItem =state.cartItems.find((x) => x.product === item.product)
            
            if(existItem) {
                localStorage.setItem("cart", action.payload.cart);
                return {
                    ...state,
                    cartItems:state.cartItems.map((x) => x.product === existItem.product ? item : x)
                }
            } else {
                localStorage.setItem("cart", action.payload.cart);
                return {
                    ...state,
                    cartItems: [...state.cartItems,item]
                }
            }
            case actionTypes.REMOVE_FROM_CART:
                return {
                    ...state,
                    cartItems: state.cartItems.filter((x) => x.product !== action.payload)
                }
        default:
            return state;
    }

}