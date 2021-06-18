import { RegisterTypes } from "./actionsTypes"
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { api } from '../../../api'
import { SaveProductSucess, SaveProductFailure } from "./actions";

function* registerProd({payload}) {
    try {
        const resultado = yield call(api.get, '/character')
        //console.log('API RESULTADO -', resultado.data.results)
        yield put(SaveProductSucess(resultado.data.results))
    } catch (e) {
        console.log(e)
        yield put(SaveProductFailure())
    }
}

export default all([
    takeLatest(RegisterTypes.REGISTER_PRODUCT_REQUEST, registerProd)
    //takeLatest(LoginTypes.SIGN_OUT_REQUEST, SignOut)
])