import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { chatHistoryApi } from "../../api/greenApi"
import { chatHistoryType } from "../../types"


export const getChatsHistory = createAsyncThunk<chatHistoryType[] | [], void, { rejectValue: string }>(
    "userDatas/getAccountChats",
    async (_, thunkAPI) => {
        try {
        const res = await axios.post(chatHistoryApi, { "chatId": '' })
        const data = (await res).data
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue("Failed to get chats.");
      }
    }
  )