import {
  FETCH_LOGIN_PENDING,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_ERROR
} from "../actions/login";

import {
  FETCH_CHECK_TOKEN_PENDING,
  FETCH_CHECK_TOKEN_SUCCESS,
  FETCH_CHECK_TOKEN_ERROR,
  RESTRICT_AUTH
} from "../actions/checkToken";

const initialState = {
  pending: false,
  loginSuccess: false,
  token: "",
  shouldAllowAuth: false,
  error: {}
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: true,
        token: action.payload,
        pending: false
      };
    case FETCH_LOGIN_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    case FETCH_CHECK_TOKEN_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_CHECK_TOKEN_SUCCESS:
      return {
        ...state,
        pending: false,
        shouldAllowAuth: true
      };
    case FETCH_CHECK_TOKEN_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    case RESTRICT_AUTH:
      return {
        ...state,
        shouldAllowAuth: false
      };

    default:
      return state;
  }
};

export default LoginReducer;
