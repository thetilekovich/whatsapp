import { createSlice } from "@reduxjs/toolkit";


type InterfaceStateType = {
    activeChat: string,
    newChatInputValue: string,
}


const initialState: InterfaceStateType = {
    activeChat: '0',
    newChatInputValue: '',
}

const InterfaceSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setActiveChat: (state, { payload }) => {
            state.activeChat = payload
        },
        setInputValue: (state, { payload }) => {
            state.newChatInputValue = payload
        },
    }
})

export default InterfaceSlice.reducer
export const { setActiveChat, setInputValue } = InterfaceSlice.actions