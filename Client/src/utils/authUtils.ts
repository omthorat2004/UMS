import { userType } from "../types";


export const setLocalStorage = (token:string,user:userType):void=>{
        localStorage.setItem('user',JSON.stringify(user));
        localStorage.setItem('auth-token', token)
}
export const clearLocalStorage = ():void=>{
        localStorage.clear()
}