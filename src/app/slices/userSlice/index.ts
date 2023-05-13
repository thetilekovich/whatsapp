import { createSlice } from "@reduxjs/toolkit";
import { userSliceType } from "../../../types";


const initialState: userSliceType = {
    auth: true,
    activeChat: '0',
}

const userSlice = createSlice({
    name: 'userSlice', 
    initialState,
    reducers: {
        setAuth: (state, {payload}) => {
            state.auth = payload
        },
        setActiveChat: (state, {payload}) => {
            state.activeChat = payload
        }
    }
})

export default userSlice.reducer
export const {setAuth, setActiveChat} = userSlice.actions