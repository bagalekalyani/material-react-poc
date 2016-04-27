import constants from '../constants';
import {push} from "redux-router";
import { post } from "./common";
import { parseJSON } from "../utils";

let {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, CLEAN_ERROR_MESSAGE} = constants;

export function authenticateUser(loginData){

    return(dispatch) => {

        dispatch({type: LOGIN_USER_REQUEST});

        let endPointURL = 'users/login';

        post(endPointURL, loginData)
            .then((response)=> {

                dispatch({
                    type: LOGIN_USER_SUCCESS,
                    payload: {
                        id: response.id,
                        email: response.email,
                        first_name: response.first_name
                    }
                });
                dispatch(push("dashboard"));

            })
            .catch(error=> {
                parseJSON(error).then((errorObj)=> {
                    dispatch({
                        type: LOGIN_USER_FAILURE,
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
