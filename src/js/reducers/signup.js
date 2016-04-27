import {createReducer} from '../utils';
import constants from '../constants';
import {pushState} from 'redux-router';
import _ from "lodash";

const initialState = {
    statusText: null,
};

export default createReducer(initialState, {

    SIGNUP_USER_REQUEST: (state, payload) => {

        return Object.assign({}, state, {
            statusText: null
        });

    },
    SIGNUP_USER_SUCCESS: (state, payload)=> {

        return Object.assign({}, state, {

        });

    },
    SIGNUP_USER_FAILURE: (state, payload) => {

        return Object.assign({}, state, {
            statusText: payload
        });

    },
    CLEAN_ERROR_MESSAGE: (state, payload)=> {

        var newState = _.cloneDeep(state);
        newState.statusText = payload;
        return newState;

    }

});
