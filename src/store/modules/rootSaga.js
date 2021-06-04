import { all } from 'redux-saga/effects';
import { default as loginSagas } from '../modules/Login/sagas'
import { default as homeSagas } from '../modules/Home/sagas.js'

export default function* rootSaga() {
    yield all([loginSagas, homeSagas])
}
