import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_LOGIN, API_REGISTER, API_SERVICE, API_ACCOUNT, API_DOCTORS } from '../api'


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
export const FetchDataService = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_SERVICE + '/getall', {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload
        }
    })
    console.log("respone", response)
    return response.data
})
export const FetchDataServiceDetail = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_SERVICE + `/${payload.url}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
export const AddService = createAsyncThunk('update/detail', async (payload) => {
    const response = await axios.post(API_SERVICE, {
        "name": payload.value
    }, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
export const UpdateOneServiceDetail = createAsyncThunk('update/detail', async (payload) => {
    const response = await axios.put(API_SERVICE + `/${payload.url}`, {
        "name": payload.value
    }, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
export const DeleteService = createAsyncThunk('update/detail', async (payload) => {
    const response = await axios.delete(API_SERVICE + `/${payload.url}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
//  account =======================================================================
export const GetAccount = createAsyncThunk('get/account', async (payload) => {
    const response = await axios.get(API_ACCOUNT + '/getall', {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload
        }
    })
    console.log("respone", response)
    return response.data
})
export const AddAcoust = createAsyncThunk('add/account', async (payload) => {
    const response = await axios.post(API_ACCOUNT, {
        "username": payload.username,
        "password": payload.password,
        "email": payload.email
    }, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
export const DeleteAccount = createAsyncThunk('delete/account', async (payload) => {
    const response = await axios.delete(API_ACCOUNT + `/${payload.url}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
export const GetOneAccount = createAsyncThunk('get/one/detail', async (payload) => {
    const response = await axios.get(API_ACCOUNT + `/${payload.url}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
export const UpdateOneAccount = createAsyncThunk('update/one/detail', async (payload) => {
    const response = await axios.put(API_ACCOUNT + `/${payload.url}`, {
        "username": payload.username,
        "email": payload.email,
        "password": payload.password
    }, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
//  docctor ========================================================================================
export const GetDoctors = createAsyncThunk('get/doctors', async (payload) => {
    const response = await axios.get(API_DOCTORS + '/getall', {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload
        }
    })
    console.log("respone", response)
    return response.data
})
export const AddDoctor = createAsyncThunk('add/doctor', async (payload) => {
    const response = await axios.post(API_DOCTORS, {
        "fullname": payload.fullname,
        "email": payload.email,
        "address": payload.address,
        "phone": payload.phone,
        "position": payload.position
    }, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
export const DeleteDoctor = createAsyncThunk('delete/doctor', async (payload) => {
    const response = await axios.delete(API_DOCTORS + `/${payload.url}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
export const GetOneDoctor = createAsyncThunk('get/one/detail', async (payload) => {
    const response = await axios.get(API_DOCTORS + `/${payload.url}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
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