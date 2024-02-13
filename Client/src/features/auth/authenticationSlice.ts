import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { error, loginFetchType, loginFormType, loginReturnType, signFormType, signReturnType, userVerifyType } from "../../types";
import { clearLocalStorage, setLocalStorage } from "../../utils";
import { login, sign, verify } from "./authApi";
type authState = {
    loading:boolean;
    error:boolean;
    currentUser:any,
    token:string | null;
    userValid:boolean;
    message:string;
    success:true|false;
}
type authPayloadType = loginFetchType|{error:string}
type verifyPayloadType = string|error

export const loginUser = createAsyncThunk<loginReturnType,loginFormType,{rejectValue:string}>("api/auth/login",async(body:loginFormType,{rejectWithValue})=>{
    try{
        const response = await login(body)
        const {data,error} = response
        if(error){
            return {error:error}
        }
        return  data
    }catch(err){
        return rejectWithValue(err instanceof Error?err.message:String(err))
    }
})

export const signUser = createAsyncThunk<signReturnType ,signFormType,{rejectValue:string}>('api/auth/sign',async(body,{rejectWithValue})=>{
    try{
        const response = await sign(body);
        const {data,error} = response
        if(error){
            return {error:error}
        }else{
        return data as signReturnType
        }

    }catch(err){
        return rejectWithValue(err instanceof Error?err.message:String(err))
    }

})

export const userVerification = createAsyncThunk<userVerifyType,string,{rejectValue:string}>("api/auth/verify",async (token,{rejectWithValue})=>{
    try{
        const response = await verify(token)
        const {data,error} = response
        if(error){
            return {error:error}
        }
        return data as string

    }catch(err){
        return rejectWithValue(err instanceof Error? err.message:String(err))
    }
})

const initialState:authState = {
    loading:false,
    error:false,
    currentUser:localStorage.getItem('current-user'),
    token:localStorage.getItem('token'),
    userValid:true,
    message:'',
    success:false
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setSuccessFalse:(state,action:{type:string})=>{
            state.success=false
        },
        setErrorFalse:(state,action:{type:string})=>{
            state.error = false
        },
        logOut:(state,action:{type:string})=>{
            clearLocalStorage()
            state.userValid = false
            state.currentUser=null
            state.token=null
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending,(state,action:PayloadAction<undefined>)=>{
            state.loading = true
        })
       builder.addCase(loginUser.fulfilled,(state,action:PayloadAction<authPayloadType>)=>{
            state.loading = false
            if('error' in action.payload){
                const error:string = action.payload.error
                state.error=true
                state.message=error
            }else{
                const {token,user} = action.payload
                state.currentUser=user
                state.token=token
                setLocalStorage(token,user)
                state.success=true
            }
       })
       .addCase(signUser.pending,(state,action)=>{
        state.loading = true
       })
       .addCase(signUser.fulfilled,(state,action:PayloadAction<authPayloadType>)=>{
                state.loading = true
                if('error' in action.payload){
                    const error:string = action.payload.error
                    state.error = true
                    state.message =error
                }else{
                    const {user,token} = action.payload
                    state.token = token
                    state.currentUser = user
                    setLocalStorage(token,user)
                    state.success=true
                }
       })
       .addCase(userVerification.pending,(state,action)=>{
        state.loading = true
       })
       .addCase(userVerification.fulfilled,(state,action:PayloadAction<verifyPayloadType>)=>{
            state.loading = false
            if(typeof(action.payload)=="object"){
                state.userValid = false
                clearLocalStorage()
                state.token =null
                state.currentUser = null
            }
       })
    }

})



export const errorSelector = (state:RootState)=>state.auth.error

export const successSelector = (state:RootState)=>state.auth.success

export const messageSelector = (state:RootState)=>state.auth.message

export const {setErrorFalse,setSuccessFalse,logOut} = authSlice.actions

export default authSlice.reducer