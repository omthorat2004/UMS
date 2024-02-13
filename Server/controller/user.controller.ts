import { Request, Response } from "express";
import pool from "../db/pool";
export const getUsers = (req:Request,res:Response)=>{
    try{
        pool.query('SELECT id ,name,photoUrl,email FROM users ',(err,result)=>{
            if(err) throw err
            res.status(200).json({users:result})
        })

    }catch(err){
        console.error(err)
        res.status(500).json({message:"Unexpected error occurred!"})
    }
}