import { createSlice } from '@reduxjs/toolkit'


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