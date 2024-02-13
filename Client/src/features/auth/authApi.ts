import { loginFetchType, loginFormType, signFormType, signReturnType } from "../../types"
export const login = async(body:loginFormType)=>{
    try{
        const res = await fetch("http://localhost:3000/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
        })
        if(!res.ok){
            const error =await res.json()
            const errorMessage = error.message
            throw new Error(errorMessage)
        }
        const data:loginFetchType = await res.json()
        return {data:data,error:null}

 
    }catch(err){
        throw(err)
    }
}

export const sign = async (body:signFormType)=>{
    try{
        const response  = await fetch('http://localhost:3000/sign',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        })
        if(!response.ok){
            const error = await response.json()
            const errorMessage = error.message
            throw new Error(errorMessage)
        }
        const data:signReturnType= await response.json()
        return {data:data,error:null}
    }catch(err){
        return {data :null,error:err instanceof Error?err.message:String(err) }
    }
}

export const verify = async (token:string)=>{
    try{
        const response = await fetch('http://localhost:3000/verify',{
            headers:{
                'Content-Type':'application/json',
                'authorisation':token
            }
        })
        if(!response.ok){
            const {message} = await response.json()
            throw new  Error(message)
        }
        const {message} = await response.json()
        return {data:message,error:null}
    }catch(err){
        return {data:null,error:err instanceof Error?err.message:String(err)}
    }
}