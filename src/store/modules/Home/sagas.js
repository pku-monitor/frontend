import {homeActionTypes} from './actions.types.js'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { api } from '../../../api'
import { DataConsumptionRequestSucess, DataConsumptionRequestFailure } from "./actions";

function* sendData({payload}) {
    console.log("entrou sagas");
    try {
        const resultado = yield call(api.get, '/character')
        //console.log('API RESULTADO -', resultado)
        //yield put(DataConsumptionRequestSucess(resultado.data.results))
        //yield put(DataConsumptionRequestSucess(resultado.data.results))
    } catch (e) {
        console.log(e)
        yield put(DataConsumptionRequestFailure())
    }
}

export default all([
    takeLatest(homeActionTypes.SEND_CONSUMITION_DATA_REQUEST, sendData)
    //takeLatest(LoginTypes.SIGN_OUT_REQUEST, SignOut)
])