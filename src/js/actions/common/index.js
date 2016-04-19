import {checkHttpStatus, parseJSON} from "../../utils";
import config from "../../config";


export function get(nodeURL) {

    let accessToken = localStorage.getItem('access_token');

    if (accessToken !== null) {
        return fetch(config.BASE_URL + nodeURL, {
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }

        }).then(checkHttpStatus)
            .then((response) => {
                return parseJSON(response);
            })
            .then(result => {
                return result;
            })
            .catch(error => {
                throw error;
            })
    } else {
        dispatch(pushState(null, '/login'));
    }

}

export function post(nodeURL, data) {

    return fetch(config.BASE_URL + nodeURL, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)

    })
        .then(checkHttpStatus)
        .then((response) => {
            return parseJSON(response);
        })
        .then(result => {
            return result;
        })
        .catch(error => {
            throw error;
        })

}

