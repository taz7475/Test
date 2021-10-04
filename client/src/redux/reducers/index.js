import {combineReducers} from 'redux'
import authReducer from './authReducer'
import { cartReducer } from './cartReducers'
import appStateReducer from './appStateReducer'
import {getProductReducers ,getProductDetails} from './productReducers'
import { orderReducer } from './orderReducer'

export default combineReducers({
    auth : authReducer,
    appState: appStateReducer,
    cart : cartReducer,
    getProducts : getProductReducers  ,
    getProductDetails : getProductDetails , 
    orders : orderReducer
})