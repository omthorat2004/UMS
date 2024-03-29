 import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authenticationSlice.ts';
import userReducer from '../features/user/userSlice.ts';
export const store = configureStore({
    reducer:{
        auth:authReducer,
        user:userReducer
    }
 })
 
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch