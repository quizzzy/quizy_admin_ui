import { APP_URI } from '../constants/index';

export const FETCH_CHECK_TOKEN_PENDING = 'FETCH_CHECK_TOKEN_PENDING';
export const FETCH_CHECK_TOKEN_SUCCESS = 'FETCH_CHECK_TOKEN_SUCCESS';
export const FETCH_CHECK_TOKEN_ERROR = 'FETCH_CHECK_TOKEN_ERROR';

export function fetchCheckTokenPending() {
	return {
		type: FETCH_CHECK_TOKEN_PENDING,
	};
}

export function fetchCheckTokenSuccess(payload) {
	return {
		type: FETCH_CHECK_TOKEN_SUCCESS,
		payload: payload,
	};
}

export function fetchCheckTokenError(error) {
	return {
		type: FETCH_CHECK_TOKEN_ERROR,
		error: error,
	};
}

export function checkToken(token) {
	return function(dispatch) {
		dispatch(fetchCheckTokenPending());
		fetch(`${APP_URI}/admin/check-token`, {
			method: 'GET',
			headers: {
				'x-access-token': token,
			},
		})
			.then(res => {
				if (res.status === 200) {
					dispatch(fetchCheckTokenSuccess());
				} else {
					throw new Error(res.error);
				}
			})
			.catch(error => {
				dispatch(fetchCheckTokenError(error));
			});
	};
}
