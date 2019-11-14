import { combineReducers } from 'redux';
import LoginReducer from './login.reducer';
import ProfileReducer from './profile.reducer';
import ScalesReducer from './scales.reducer';

export default combineReducers({
	login: LoginReducer,
	profiles: ProfileReducer,
	scales: ScalesReducer,
});
