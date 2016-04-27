import constants from '../constants';
import { post } from "./common";
import { parseJSON } from "../utils";

let {SIGNUP_USER_REQUEST, SIGNUP_USER_SUCCESS, SHOW_HIDE_LOGIN, SIGNUP_USER_FAILURE, CLEAN_ERROR_MESSAGE} = constants;

export function signUpUser(signupData){

    return(dispatch) => {

        dispatch({type: SIGNUP_USER_REQUEST});

        let endPointURL = 'users/signup';

        post(endPointURL, signupData)
            .then((response)=> {

                dispatch({
                    type: SIGNUP_USER_SUCCESS
                });
                dispatch({
                    type: SHOW_HIDE_LOGIN,
                    payload: true
                });

            })
            .catch(error=> {
                parseJSON(error).then((errorObj)=> {
                    dispatch({
                        type: SIGNUP_USER_FAILURE,
                        payload: errorObj.message
                    });
                })
            })

    }

}

export function clearErrorMessage() {

    return {
        type: CLEAN_ERROR_MESSAGE,
        payload: null
    }

}
