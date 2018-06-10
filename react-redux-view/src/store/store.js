
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { userInfo } from './login/login-reducer';


let store = createStore(
    combineReducers({
        userInfo
    }), 
    applyMiddleware(thunk)
);

export default store;