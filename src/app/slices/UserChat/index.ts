import { createSlice } from "@reduxjs/toolkit";
import { chatHistoryType } from "../../../types";
import { getChatsHistory } from "../../actions/getChatsHistory";



type UserChatInitialState = {
    chatData: chatHistoryType[] | null
    pending: boolean,
    error: any
}

const initialState: UserChatInitialState = {
    chatData: null,
    error: null,
    pending: false
}

const userChat = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getChatsHistory.pending, (state) => {
                state.pending = true
                state.error = null
            })
            .addCase(getChatsHistory.rejected, (state, { payload }) => {
                state.pending = false
                state.error = payload
            })
            .addCase(getChatsHistory.fulfilled, (state, { payload }) => {
                state.pending = false
                state.error = null
                state.chatData = payload
            })

    }
})

export default userChat.reducer
