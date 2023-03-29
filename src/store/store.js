import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import authReducer from '../redux/authSlice'

const reducer = combineReducers({
    authReducer: authReducer
})
const store = configureStore({
    reducer
})
export default store