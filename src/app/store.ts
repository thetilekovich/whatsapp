import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import InterfaceSlice from './slices/InterfaceSlice';
import userDatas from './slices/UserDatas';
import userChat from './slices/UserChat'

export const store = configureStore({
  reducer: {
    userSlice,
    InterfaceSlice,
    userDatas,
    userChat,
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
