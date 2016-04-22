import {createReducer} from '../utils';
import constants from '../constants';
import {pushState} from 'redux-router';

const initialState = {
    loginBox: true
};

export default createReducer(initialState, {

    SHOW_HIDE_LOGIN: (state, payload) => {
        return Object.assign({}, state, {

            loginBox: payload

        });
    },

});
