import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { accountStatusApi } from "../../api/greenApi"
import { accountStatusType } from "../../types"


export const getAccountStatus = createAsyncThunk<accountStatusType, void, { rejectValue: string }>(
    "userSlice/getAccountStatus",
    async (_, thunkAPI) => {
      try {
        const response = await axios(accountStatusApi)
        const data = (await response).data
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue("Failed to get account status.");
      }
    }
  );