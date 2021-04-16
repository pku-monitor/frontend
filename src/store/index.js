import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const composer = compose(applyMiddleware(...middlewares));

const store = createStore(rootReducer, composer);

sagaMiddleware.run(rootSaga);

export default store;