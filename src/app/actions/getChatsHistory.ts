import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { chatHistoryApi } from "../../api/greenApi"
import { chatHistoryType } from "../../types"





export const getChatsHistory = createAsyncThunk<chatHistoryType[], string>
  ("userDatas/userChatData",
    async (chatId, thunkAPI) => {
      try {
        const res = await axios.post(chatHistoryApi, { "chatId": chatId})
        const data = (await res).data
        console.log(await data)
        return data.reverse()
      } catch (error) {
        return thunkAPI.rejectWithValue("Failed to get chats.");
      }
    }
  )