import constants from '../constants';
import { push } from 'redux-router';
import { post } from "./common";
import { parseJSON } from "../utils";

let {SIGNUP_USER_REQUEST, SIGNUP_USER_SUCCESS} = constants;

export function signUpUser(signupData){

    return(dispatch) => {

        dispatch({type: SIGNUP_USER_REQUEST});

        let endPointURL = 'users/signup';

        post(endPointURL, signupData)
            .then((response)=> {
                dispatch({type: SIGNUP_USER_SUCCESS});
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
