import { LoginTypes } from "./ActionsTypes";

const INITIAL_STATE = {
    data: {usuario: null},
    personagens: [],
    loading: false
}

export default function login(state = INITIAL_STATE, actions){
    switch(actions.type) {
        case LoginTypes.SIGN_IN_REQUEST: {
            //const{username, password} = actions.payload
            //console.log('Username: ', username)
            //console.log('Password: ', password)
            return {...state, loading: true}
        }

        case LoginTypes.SIGN_IN_SUCCESS: {
            const{data} = actions.payload
            //console.log('Username: ', username)
            //console.log('Password: ', password)
            return {...state, loading: false, personagens: data}
        }

        case LoginTypes.SIGN_IN_FAILURE: {
            const{data} = actions.payload
            //console.log('Username: ', username)
            //console.log('Password: ', password)
            return {...state, loading: false}
        }

        default:
            return state;
    }
}