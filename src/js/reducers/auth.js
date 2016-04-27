import {createReducer} from '../utils';
import constants from '../constants';
import {pushState} from 'redux-router';

const initialState = {
    statusText: null,
    email: null,
    user_id:null,
    first_name: null
};

export default createReducer(initialState, {

    LOGIN_USER_REQUEST: (state, payload) => {

        return Object.assign({}, state, {
            statusText: null
        });

    },
    LOGIN_USER_SUCCESS: (state, payload) => {

        return Object.assign({}, state, {
            user_id: payload.id,
            email: payload.email,
            first_name: payload.first_name,
            statusText: payload.statusText
        });

    },
    LOGIN_USER_FAILURE: (state, payload) => {

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
