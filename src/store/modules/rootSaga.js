import { all } from 'redux-saga/effects';
import { default as loginSagas } from '../modules/Login/sagas'

export default function* rootSaga() {
    yield all([loginSagas])
}
