import { createSlice } from "@reduxjs/toolkit";
import { accountChatsType } from "../../../types";
import { getAccountChats } from "../../actions/getAccountChats";



type UserDatasInitialState = {
    chats: accountChatsType[],
    pendingUserChats: boolean,
    error: null | string | undefined
}

const initialState: UserDatasInitialState = {
    pendingUserChats: true,
    error: null,
    chats: []
}

const userDatas = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAccountChats.pending, (state) => {
                state.pendingUserChats = true
                state.error = null
            })
            .addCase(getAccountChats.fulfilled, (state, {payload}) => {
                state.pendingUserChats = false
                state.error = null
                state.chats = payload
            })
            .addCase(getAccountChats.rejected, (state, {payload}) => {
                state.error = payload
                state.pendingUserChats = false
            })
        
    }
})

export default userDatas.reducer
