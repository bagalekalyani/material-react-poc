import constants from '../constants';
import { pushState,push } from 'redux-router';

let {LOGIN_USER_REQUEST} = constants;

export function authenticateUser(username, password){
    return(dispatch) => {
        dispatch({type:'LOGIN_USER_REQUEST'});
        dispatch(push("dashboard"));
    }
}
