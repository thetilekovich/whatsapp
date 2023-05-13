import { createSlice } from "@reduxjs/toolkit";
import { userSliceType } from "../../../types";


const initialState: userSliceType = {
    auth: true
}

const userSlice = createSlice({
    name: 'userSlice', 
    initialState,
    reducers: {
        setAuth: (state, {payload}) => {
            state.auth = payload
        }
    }
})

export default userSlice.reducer
export const {setAuth} = userSlice.actions