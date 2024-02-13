import { userType } from "../../types"

export const users =async ()=>{
    try{
        const response = await fetch('http://localhost:3000/users')
        if(!response.ok){
            const {message} = await response.json()
            throw new Error(message)
        }
        const data :{users:userType[]}= await response.json()
        return {data,error:null}
    }catch(err){
        console.error(err)
        return {data:null,error:err instanceof Error ? err.message :String(err)}
    }
}