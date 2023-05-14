import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { qrCodeApi } from "../../api/greenApi"
import { responseQrCode } from "../../types"


export const getQrCode = createAsyncThunk<responseQrCode, void, { rejectValue: string }>(
    "userSlice/getQrCode",
    async (_, thunkAPI) => {
      try {
        const response = await axios(qrCodeApi)
        const data = (await response).data
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue("Failed to get QR code.");
      }
    }
  );