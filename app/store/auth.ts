import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import type { PayloadAction } from "@reduxjs/toolkit"

export interface SchoolState {
    data: [] | null,
    loading: boolean,
    error: string | null,
}

const initialState: SchoolState = {
    data: [],
    loading: false,
    error: ''
}

export const getSchool = createAsyncThunk("school", async() =>{
    return fetch("http://192.168.1.68:4000/getSchools")
    .then(res => res.json)
})

const schoolSlice = createSlice({
    name: 'school',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(getSchool.pending,(state) => {
            state.loading = true
        })
        .addCase(getSchool.fulfilled, (state, action:PayloadAction<any>) => {
            state.loading = false
            state.error = null
            state.data = action.payload
        })
        .addCase(getSchool.rejected, (state,action:PayloadAction<any>) => {
            state.loading = false
            state.error = action.payload
            state.data = []
        })
    }
})

export default schoolSlice.reducer