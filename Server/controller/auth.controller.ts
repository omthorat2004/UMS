import { compare, hash } from 'bcrypt'
import * as dotenv from 'dotenv'
import { Request, Response } from "express"
import { verify } from 'jsonwebtoken'
import { ResultSetHeader } from "mysql2"
import pool from "../db/pool"
import { User } from "../db/type"
import { createToken } from '../utils/createToken'
dotenv.config()

const key  = process.env?.JWT_KEY

export const Sign = async(req:Request,res:Response)=>{
    try{
        const {email,password,photoUrl,name} = req.body
        pool.query<User[]>('SELECT * from users WHERE email = ?',[email],async(err,result)=>{
            if (err) throw err
            if(result[0]){
                return res.status(403).json({message:'User already exist'})
            }
            const hashedPassword = await hash(password,10);
            pool.query<ResultSetHeader>("INSERT INTO users (email,password,name,photoUrl) VALUES (?,?,?,?)",[email,hashedPassword,name,photoUrl],(err,result)=>{
                if (err) throw err
                const id = result.insertId
                const token =createToken({id})
                res.status(201).json({token:token,user:{email,name,photoUrl,id:result.insertId}})
            })
        })
    }catch(err){
        console.log(err instanceof Error ?err.message:"Unexpected error occured")
    }
}

export const Login = (req:Request,res:Response)=>{
    try{
        const {email,password} = req.body
        pool.query<User[]>('SELECT email,name,photoUrl FROM users WHERE email=?',[email],async(err,result)=>{
            if(err) throw err
            if(!result[0]){
               return  res.status(403).json({message:'User not exist'})
            }
            const authorised = await compare(password as string|Buffer,result[0].password as  string)
            if(!authorised){
                return res.status(401).json({message:'Incorrect  email or password'})
            }
            const id = result[0].id
            const token = createToken({id})
            return res.status(200).json({user:result[0],token})
        })

    }catch(err){
        console.log(err)
        res.status(500).json({message:"Unexpected error occured"})
    }
}

export const userVerification = (req:Request,res:Response)=>{
    const token = req.headers.authorisation
    try{
        verify(token as string,key  as string,(err,decode)=>{
            if(err){
                return res.status(403).json({message:'Please try again login'})
            }
            return res.status(200).json({message:"User is valid"})
        })

    }
    catch(err){
        console.error(err)

    }
}
