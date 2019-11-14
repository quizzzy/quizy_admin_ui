import {
	FETCH_PROFILE_PENDING,
	FETCH_PROFILE_SUCCESS,
	FETCH_PROFILE_ERROR,
} from '../actions/profile.action';

const initialState = {
	pending: false,
	profiles: [],
};

const ProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PROFILE_PENDING:
			return {
				...state,
				pending: true,
			};
		case FETCH_PROFILE_SUCCESS:
			return {
				...state,
				profiles: action.payload,
				pending: false,
			};
		case FETCH_PROFILE_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default ProfileReducer;
