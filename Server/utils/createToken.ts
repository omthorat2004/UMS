import dotenv from 'dotenv';
import { sign } from 'jsonwebtoken';
dotenv.config()
type Arguments = {
    id:number;
}

export const createToken = (obj:Arguments):string=>{
        const token = sign(obj,process.env.JWT_KEY as string)
        return token
}