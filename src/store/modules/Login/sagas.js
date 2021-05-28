import { LoginTypes } from "./ActionsTypes"
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { api } from '../../../api'
import { signInSuccess, signInError } from "./actions";

function* SignIn({payload}) {
    try {
        const resultado = yield call(api.get, '/character')
        //console.log('API RESULTADO -', resultado)
        yield put(signInSuccess(resultado.data.results))
    } catch (e) {
        console.log(e)
        yield put(signInError())
    }
}

export default all([
    takeLatest(LoginTypes.SIGN_IN_REQUEST, SignIn)
    //takeLatest(LoginTypes.SIGN_OUT_REQUEST, SignOut)
])