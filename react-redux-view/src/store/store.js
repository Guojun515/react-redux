
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { userInfo } from './login/login-reducer';
import {appIndexData} from './appIndex/appIndex-reducer';


let store = createStore(
    combineReducers({
        userInfo,
        appIndexData
    }), 
    applyMiddleware(thunk)
);

export default store;