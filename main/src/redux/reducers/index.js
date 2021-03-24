import { combineReducers } from 'redux';
import userReducer from './user';

const globalReducer = combineReducers({
    user: userReducer,
});

export default (state, action) => globalReducer(state, action);
