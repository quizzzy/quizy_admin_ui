import {
    FETCH_LOGIN_PENDING,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_ERROR
} from "../actions/login.action";

import {
    FETCH_CHECK_TOKEN_PENDING,
    FETCH_CHECK_TOKEN_SUCCESS,
    FETCH_CHECK_TOKEN_ERROR
} from "../actions/check-token.action";

const initialState = {
    pending: false,
    loginSuccess: false,
    token: "",
    shouldAllowAuth: false,
    error: {},
    shouldLogAgain: false
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOGIN_PENDING:
            return {
                ...state,
                shouldAllowAuth: false,
                pending: true
            };
        case FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                loginSuccess: true,
                shouldAllowAuth: true,
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
                shouldLogAgain: false,
                pending: true
            };
        case FETCH_CHECK_TOKEN_SUCCESS:
            return {
                ...state,
                pending: false,
                shouldLogAgain: false,
                shouldAllowAuth: true
            };
        case FETCH_CHECK_TOKEN_ERROR:
            return {
                ...state,
                pending: false,
                shouldLogAgain: true,
                error: action.error
            };

        default:
            return state;
    }
};

export default LoginReducer;
