import { LoginTypes } from './ActionsTypes'

export function signInRequest(username, password) {
    return{
        type: LoginTypes.SIGN_IN_REQUEST,
        payload: {username, password},
    }
}


export function signInSuccess(data){
    return{
        type: LoginTypes.SIGN_IN_SUCCESS,
        payload: {data},
    }
}

export function signInError(){
    return{
        type: LoginTypes.SIGN_IN_FAILURE,
    }
}

/*
export function signInFailure() {
    
}
*/