import { combineReducers } from 'redux'

import authentication from './authentication'
import orders from "./orderReducer";


const rootReducer = combineReducers({ authentication, orders })

export default rootReducer
