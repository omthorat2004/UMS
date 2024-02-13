import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import Swal from "sweetalert2";
import { setErrorFalse, setSuccessFalse } from "../features/auth/authenticationSlice";


type action = ReturnType<typeof setErrorFalse> | ReturnType<typeof setSuccessFalse>;
export const showAuthAlert = (success:boolean,error:boolean,message:string,dispatch:Dispatch<action>,navigate:NavigateFunction):void=>{
        if(error){
            Swal.fire({
                title:message,
                icon:'error'
            })
            setTimeout(()=>{
                dispatch(setErrorFalse())
            },1000)
        
        }
        if(success){
            navigate('/')
            dispatch(setSuccessFalse())
        }
}