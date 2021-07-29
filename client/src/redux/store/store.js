/** @format */

import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {} from "react-redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";


//store for authentification
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
//store for products MERN-shoppingCarts

export default store;
