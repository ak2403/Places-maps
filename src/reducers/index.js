import { combineReducers } from 'redux';
import AuthReducer from './authReducer';

const AppReducers = combineReducers({
    authenication: AuthReducer
});

export default AppReducers;