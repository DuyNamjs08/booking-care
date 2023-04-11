import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_LOGIN, API_REGISTER, API_SERVICE, API_ACCOUNT, API_DOCTORS, API_PATIENTS, API_SERVICE_DETAIL, API_BILLS, API_PATIENTS_SERVICE } from '../api'


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
    const response = await axios.get(API_SERVICE + `/getbyid/${payload.url}`, {
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
    const response = await axios.get(API_ACCOUNT + `/getbyid/${payload.url}`, {
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
        "position": payload.position,
        "gender": +payload.gender,
        "major": payload.major,
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
    const response = await axios.get(API_DOCTORS + `/getbyid/${payload.url}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
export const UpdateOneDoctor = createAsyncThunk('update/one/detail', async (payload) => {
    const response = await axios.put(API_DOCTORS + `/${payload.url}`, {
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
//  patients ========================================================================================
export const GetPatients = createAsyncThunk('get/patients', async (payload) => {
    const response = await axios.get(API_PATIENTS + '/getall', {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload
        }
    })
    console.log("respone", response)
    return response.data
})
export const AddPatients = createAsyncThunk('add/patients', async (payload) => {
    const response = await axios.post(API_PATIENTS, {
        "fullname": payload.fullname,
        "email": payload.email,
        "address": payload.address,
        "phone": payload.phone,
        "gender": +payload.gender
    }, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
export const DeletePatients = createAsyncThunk('delete/patients', async (payload) => {
    const response = await axios.delete(API_PATIENTS + `/${payload.url}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
export const GetOnePatients = createAsyncThunk('get/one/detail', async (payload) => {
    const response = await axios.get(API_PATIENTS + `/getbyid/${payload.url}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
export const UpdateOnePatients = createAsyncThunk('update/one/detail', async (payload) => {
    const response = await axios.put(API_PATIENTS + `/${payload.url}`, {
        "fullname": payload.fullname,
        "email": payload.email,
        "address": payload.address,
        "phone": payload.phone,
        "gender": payload.gender
    }, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
// servicer ====================================
export const FetchService = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_SERVICE_DETAIL + '/getall', {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload
        }
    })
    console.log("respone", response)
    return response.data
})
export const FetchServiceId = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_SERVICE_DETAIL + `/${payload.url}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
// export const UpdateOneServiceDetails = createAsyncThunk('fetch/service', async (payload) => {
//     const response = await axios.put(API_SERVICE_DETAIL + `/${payload.url}`, {
//         "servicieid ": "642828b2fa87e5b20053d694",
//         "patientid": "64279b840a0903fda7098db0"
//     }, {
//         headers: {
//             "Content-Type": "application/json",
//             "x_authorization": payload.token
//         }
//     })
//     console.log("respone", response)
//     return response.data
// })
export const AddPatientService = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.post(API_PATIENTS_SERVICE, {
        "serviceid": payload.url,
        "patientid": payload.idUser
    }, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
// bills ================================================================
export const FetchBills = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_BILLS + '/getall', {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload
        }
    })
    console.log("respone", response)
    return response.data
})
export const FetchGetbillbypatientid = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_BILLS + '/getbillbypatientid' + `/${payload}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload
        }
    })
    console.log("respone", response)
    return response.data
})
export const FetchTotalrevenue = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_BILLS + '/totalrevenue', {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload
        }
    })
    console.log("respone", response)
    return response.data
})
export const FetchBillsbyId = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_BILLS + `/getbyid/${payload.url}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
export const AddBills = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.post(API_BILLS, {
        "name": payload.name,
        "description": payload.description,
        "totalprice": payload.totalprice,
        patientid: payload.patient,
        doctorid: payload.doctor
    }, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
export const DeleteBills = createAsyncThunk('delete/patients', async (payload) => {
    const response = await axios.delete(API_BILLS + `/${payload.url}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
        }
    })
    console.log("respone", response)
    return response.data
})
export const ExportBills = createAsyncThunk('delete/patients', async (payload) => {
    console.log("payload", payload.token);
    const url = API_BILLS + `/exportexcel`
    const data = {
        "fromDate": payload.date.todate,
        "toDate": payload.date.fromdate
    }
    const response = await axios.post(url, data, {
        headers: {
            "Content-Type": "application/json",
            x_authorization: payload.token
        },
        responseType: 'blob',
    });
    // const response = await axios({
    //     url,
    //     method: 'GET',
    //     responseType: 'blob',
    //     data,
    //     headers: {
    //         "Content-Type": "application/json",
    //         x_authorization: payload.token
    //     }


    // });
    console.log("respone", response)
    return response.data
})
// ================================================
export const FetchPamacy = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_PATIENTS_SERVICE + `/getpatientservice/${payload.url}`, {
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
        data: [],
        service: [],
        idUser: {}
    },
    reducers: {
        getservice: (state, action) => {
            state.service = action.payload
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(FetchLogin.fulfilled, (state, action) => {
                state.data = action.payload
            })
    }
})

const { actions, reducer } = authSlice
export const { getservice } = actions
export default reducer