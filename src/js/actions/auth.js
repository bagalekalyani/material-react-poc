import constants from '../constants';
import {push} from "redux-router";
import { post } from "./common";
import { parseJSON } from "../utils";

let {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE} = constants;

export function authenticateUser(loginData){

    return(dispatch) => {

        dispatch({type: LOGIN_USER_REQUEST});

        let endPointURL = 'users/login';

        post(endPointURL, loginData)
            .then((response)=> {

                dispatch({type: LOGIN_USER_SUCCESS});
                dispatch(push("dashboard"));

            })
            .catch(error=> {
                console.log(error);
                console.log(parseJSON(error));
                // parseJSON(error).then((errorObj)=> {
                //     dispatch({
                //         type: LOGIN_USER_FAILURE,
                //         payload: errorObj.message
                //     });
                // })
            })

    }
}
