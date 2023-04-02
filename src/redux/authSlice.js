import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_LOGIN } from '../api'


export const FetchLogin = createAsyncThunk('fetch/login',async(payload)=>{
    const response = await axios.post(API_LOGIN,{
            "username":"admin",
            "password":"123456"
    },{
        headers:{
        }
    })
    console.log("respone" , response)
    return response.data
})


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        test: '12213123'
    },
    reducers: {

    }
})

const { actions, reducer } = authSlice
export default reducer