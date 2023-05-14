import { createSlice } from "@reduxjs/toolkit";
import { userSliceType } from "../../../types";


const initialState = {
    activeChat: '0',
}

const InterfaceSlice = createSlice({
    name: 'userSlice', 
    initialState,
    reducers: {
        setActiveChat: (state, {payload}) => {
            state.activeChat = payload
        }
    }
})

export default InterfaceSlice.reducer
export const {setActiveChat} = InterfaceSlice.actions