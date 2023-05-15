import { createSlice } from "@reduxjs/toolkit";
import { accountChatsType, chatHistoryType, contactInfoType } from "../../../types";
import { getAccountChats } from "../../actions/getAccountChats";



type UserDatasInitialState = {
    chats: accountChatsType[],
    pending: boolean,
    error: null | string | undefined
}

const initialState: UserDatasInitialState = {
    pending: false,
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
                state.pending = true
                state.error = null
            })
            .addCase(getAccountChats.fulfilled, (state, {payload}) => {
                state.pending = false
                state.error = null
                state.chats = payload
            })
            .addCase(getAccountChats.rejected, (state, {payload}) => {
                state.error = payload
                state.pending = false
            })
        
    }
})

export default userDatas.reducer
