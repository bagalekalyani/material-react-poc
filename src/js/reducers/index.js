import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';
import auth from './auth';
import app from "./app";
import signup from "./signup";

export default combineReducers({
    auth,
    app,
    signup,
    router: routerStateReducer
});
