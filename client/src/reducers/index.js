import { combineReducers } from 'redux';
import showReducer from './showReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({ shows: showReducer, users: userReducer });
export default rootReducer;
