import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_LOGIN, API_REGISTER } from '../api'


export const FetchLogin = createAsyncThunk('fetch/login', async (payload) => {
    const response = await axios.post(API_LOGIN, {
        "username": payload.username,
        "password": payload.password
    }, {
        headers: {
        }
    })
    console.log("respone", response)
    return response.data
})
export const FetchRegister = createAsyncThunk('fetch/register', async (payload) => {
    const response = await axios.post(API_REGISTER, {
        "username": payload.username,
        "email": payload.email,
        "password": payload.password
    }, {
        headers: {
        }
    })
    console.log("respone", response)
    return response.data
})


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        data: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder

            .addCase(FetchLogin.fulfilled, (state, action) => {
                state.data = action.payload
            })
    }
})

const { actions, reducer } = authSlice
export default reducer