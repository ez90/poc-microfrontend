import { combineReducers } from 'redux';
import modalReducer from './modal';

const globalReducer = combineReducers({
    modal: modalReducer,
});

export default (state, action) => globalReducer(state, action);
