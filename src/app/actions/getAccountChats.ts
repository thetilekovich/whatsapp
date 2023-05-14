import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { accountChatsApi } from "../../api/greenApi"
import { accountChatsType } from "../../types"


export const getAccountChats = createAsyncThunk<accountChatsType[] | [], void, { rejectValue: string }>(
    "userDatas/getAccountChats",
    async (_, thunkAPI) => {
      try {
        const response = await axios(accountChatsApi)
        const data = (await response).data
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue("Failed to get chats.");
      }
    }
  )