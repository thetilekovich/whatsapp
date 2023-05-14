import { createSlice } from "@reduxjs/toolkit";
import { accountStatusType, responseQrCode } from "../../../types";
import { getAccountStatus } from "../../actions/getAccountStatus";
import { getQrCode } from "../../actions/getQrCode";



type UserSliceInitialState = {
    auth: boolean,
    pendingQrCode: boolean,
    error: null | string,
    qrCode: responseQrCode | null
}

const initialState: UserSliceInitialState = {
    auth: false,
    pendingQrCode: false,
    error: null,
    qrCode: null
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setAuth: (state, { payload }) => {
            state.auth = payload
        },
        setLoading: (state, { payload }) => {
            state.pendingQrCode = payload
        },
        setQrCode: (state, { payload }) => {
            state.qrCode = payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getQrCode.pending, (state) => {
                state.pendingQrCode = true;
                state.error = null;
            })
            .addCase(getQrCode.fulfilled, (state, { payload }) => {
                state.pendingQrCode = false;
                state.qrCode = payload;
            })
            .addCase(getQrCode.rejected, (state, action) => {
                state.pendingQrCode = false;
                state.error = action.error.message || 'Something went wrong';
            })
            .addCase(getAccountStatus.fulfilled, (state, { payload }) => {
                state.auth = payload.stateInstance === 'authorized' ? true : false
            })
    }
})

export default userSlice.reducer
export const { setAuth, setLoading, setQrCode } = userSlice.actions