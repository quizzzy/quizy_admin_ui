import { APP_URI } from "../constants/index";

export const FETCH_SCALES_PENDING = "FETCH_SCALES_PENDING";
export const FETCH_SCALES_SUCCESS = "FETCH_SCALES_SUCCESS";
export const FETCH_SCALES_ERROR = "FETCH_SCALES_ERROR";

export function fetchScalesPending() {
    return {
        type: FETCH_SCALES_PENDING
    };
}

export function fetchScalesSuccess(payload) {
    return {
        type: FETCH_SCALES_SUCCESS,
        payload
    };
}

export function fetchScalesError(error) {
    return {
        type: FETCH_SCALES_ERROR,
        error
    };
}

export function fetchScales() {
    return function(dispatch) {
        dispatch(fetchScalesPending());

        return fetch(`${APP_URI}/api/scales`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(scales => {
                dispatch(fetchScalesSuccess(scales));
            })
            .catch(error => {
                dispatch(fetchScalesError(error));
            });
    };
}
