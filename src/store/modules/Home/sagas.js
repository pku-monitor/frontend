import {homeActionTypes} from './actions.types.js'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { api } from '../../../api'
import { DataConsumptionRequestSucess, DataConsumptionRequestFailure, DataProductSuggestionSucess, DataProductSuggestionFailure } from "./actions";

function* sendData({payload}) {
    
    try {
        const resultado = yield call(api.post, '/SalvarProduto', payload);
        console.log('API RESULTADO -', resultado.data);
        yield put(DataConsumptionRequestSucess(resultado.data));
    } catch (e) {
        yield put(DataConsumptionRequestFailure())
    }
}

function* sendProduct(){
    console.log("ENTROU")
    try {
        const resultado = yield call(api.get, '/Historico');
        resultado=resultado.data;
        console.log("dados que veio " + resultado);
        yield put(DataProductSuggestionSucess(resultado));
    } catch (e) {
        console.log("ERRO");
        yield put(DataProductSuggestionFailure());
    }
}

export default all([
    takeLatest(homeActionTypes.SEND_CONSUMITION_DATA_REQUEST, sendData),
    takeLatest(homeActionTypes.SEND_SUGGESTION_PRODUCT_NAME_REQUEST, sendProduct)
])