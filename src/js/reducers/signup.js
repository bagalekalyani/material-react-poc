import {createReducer} from '../utils';
import constants from '../constants';
import {pushState} from 'redux-router';
import _ from "lodash";

const initialState = {

};

export default createReducer(initialState, {

    SIGNUP_USER_SUCCESS: (state, payload)=> {
        return _.cloneDeep(initialState);
    },

});
