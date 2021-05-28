import { combineReducers } from 'redux';
import home from '../modules/Home/reducer.js'
import login from '../modules/Login/reducer'

export const rootReducer = combineReducers({home, login})


