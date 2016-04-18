import {createReducer} from '../utils';
import constants from '../constants';
import {pushState} from 'redux-router';

const initialState = {

    // signupInfo: {
    //     firstName: null,
    //     lastName: null
    // }

};

export default createReducer(initialState, {

    SIGNUP_USER_SUCCESS: (state, payload)=> {
        return _.cloneDeep(initialState);
    },

});
