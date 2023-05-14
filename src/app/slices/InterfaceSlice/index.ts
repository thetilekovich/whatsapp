import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    activeChat: '0',
    newChatInputValue: ''
}

const InterfaceSlice = createSlice({
    name: 'userSlice', 
    initialState,
    reducers: {
        setActiveChat: (state, {payload}) => {
            state.activeChat = payload
        },
        setInputValue: (state, {payload}) => {
            state.newChatInputValue  = payload
        }
    }
})

export default InterfaceSlice.reducer
export const {setActiveChat, setInputValue} = InterfaceSlice.actions