import {combineReducers} from 'redux'
import authReducer from './authReducer'
import { cartReducer } from './cartReducers'
import appStateReducer from './appStateReducer'
import {getProductReducers ,getProductDetails} from './productReducers'

export default combineReducers({
    auth: authReducer,
    appState: appStateReducer,
    cart : cartReducer,
    getProducts : getProductReducers  ,
    getProductDetails : getProductDetails
})