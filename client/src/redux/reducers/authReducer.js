/** @format */

import {
  GET_PROFILE_FAILED,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actions/authTypes";

const initState = {
  token: localStorage.getItem("token"),
  isAuth: Boolean(localStorage.getItem("isAuth")),
  user: JSON.parse(localStorage.getItem("user")),
  loading: false,
  errors: null,
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PROFILE_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("isAuth", true);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        errors: null,
        token: payload.token,
      };
    case GET_PROFILE_SUCCESS:
      localStorage.setItem("user", JSON.stringify(payload));
      return {
        ...state,
        user: payload,
      };
      case LOGOUT:
        localStorage.clear()
        return {
            ...state,
            isAuth: false,
            user: null,
            token: null,
        }
    case GET_PROFILE_FAILED:
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        errors: payload,
        token: null,
      };

    default:
      return state;
  }
};

export default authReducer;
