import { combineReducers } from 'redux';
import showReducer from './showReducer';
import userReducer from './userReducer';
import reviewReducer from './reviewReducer';

const rootReducer = combineReducers({ shows: showReducer, users: userReducer, reviews: reviewReducer });
export default rootReducer;
