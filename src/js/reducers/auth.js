import {createReducer} from '../utils';
import constants from '../constants';
import {pushState} from 'redux-router';

const initialState = {
    token: null,
    userName: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null,
    loginBox: true
};

export default createReducer(initialState, {

    LOGIN_USER_REQUEST: (state, payload) => {
        return Object.assign({}, state, {

            'isAuthenticating': true,
            'authenticationStatus':null,
            'statusText': null

        });
    },

});
