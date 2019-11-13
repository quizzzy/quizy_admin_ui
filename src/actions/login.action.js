import { APP_URI } from "../constants/index";

export const FETCH_LOGIN_PENDING = "FETCH_LOGIN_PENDING";
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_LOGIN_ERROR = "FETCH_LOGIN_ERROR";

export function fetchLoginPending() {
    return {
        type: FETCH_LOGIN_PENDING
    };
}

export function fetchLoginSuccess(payload) {
    return {
        type: FETCH_LOGIN_SUCCESS,
        payload: payload
    };
}

export function fetchLoginError(error) {
    return {
        type: FETCH_LOGIN_ERROR,
        error: error
    };
}

export function fetchLogin(loginData) {
    return function(dispatch) {
        dispatch(fetchLoginPending());
        fetch(`${APP_URI}/admin/login`, {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.text().then(token => {
                        dispatch(fetchLoginSuccess(token));
                        localStorage.setItem("token", JSON.stringify(token));
                    });
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(error => {
                dispatch(fetchLoginError(error));
                console.error(error);
                alert("Error logging in please try again");
            });
    };
}
