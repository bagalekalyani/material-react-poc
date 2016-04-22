import constants from "../constants";

let {SHOW_HIDE_LOGIN} = constants;


export function showHideLoginBox(showHideBool) {

    return {
        type: SHOW_HIDE_LOGIN,
        payload: showHideBool
    }
}
