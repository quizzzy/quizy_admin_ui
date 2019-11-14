import { APP_URI } from '../constants/index';

export const FETCH_PROFILE_PENDING = 'FETCH_PROFILE_PENDING';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR';

export function fetchProfilePending() {
	return {
		type: FETCH_PROFILE_PENDING,
	};
}

export function fetchProfileSuccess(payload) {
	return {
		type: FETCH_PROFILE_SUCCESS,
		payload,
	};
}

export function fetchProfileError(error) {
	return {
		type: FETCH_PROFILE_ERROR,
		error,
	};
}

export function fetchProfiles() {
	return dispatch => {
		dispatch(fetchProfilePending());

		return fetch(`${APP_URI}/api/profiles`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => response.json())
			.then(profiles => {
				dispatch(fetchProfileSuccess(profiles));
			})
			.catch(error => {
				dispatch(fetchProfileError(error));
			});
	};
}
