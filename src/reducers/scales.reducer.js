import {
	FETCH_SCALES_PENDING,
	FETCH_SCALES_SUCCESS,
	FETCH_SCALES_ERROR,
} from '../actions/scales.action';

const initialState = {
	pending: false,
	scales: [],
};

const ScalesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SCALES_PENDING:
			return {
				...state,
				pending: true,
			};
		case FETCH_SCALES_SUCCESS:
			return {
				...state,
				scales: action.payload,
				pending: false,
			};
		case FETCH_SCALES_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default ScalesReducer;
