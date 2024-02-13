import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { userType } from "../../types";
import { users } from "./userApi";

type userState = {
    success:boolean;
    loading:boolean;
    error:boolean;
    message:string;
    users:userType[];
}

type UserPayload = {users:userType}|{error:string;}

export const getUsers = createAsyncThunk<UserPayload,never,{rejectValue:string}>("api/getUsers",async(_,{rejectWithValue})=>{
    try{
        const response = await users()
        if(response.error){
            return {error:response.error}
        }
        return response.data

    }catch(err){
        console.error(err)
        return rejectWithValue(err instanceof Error ? err.message:)
    }

})

const initialState:userState = {
    success:false,
    loading:false,
    error:false,
    message:'',
    users:[]
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getUsers.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(getUsers.fulfilled,(state,action:PayloadAction<UserPayload>)=>{
            

        })
    }
    
})

export const loadingSelector = (state:RootState)=> state.user.loading

export const errorSelector = (state:RootState)=>state.user.error

export const messageSelector = (state:RootState)=>state.user.message

export const successSelector = (state:RootState)=>state.user.success

export const usersSelector = (state:RootState)=>state.user.users


export default userSlice.reducer
