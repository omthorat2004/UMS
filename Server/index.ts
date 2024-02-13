// npm i  typescript @types/express @types/node ts-node

if(process.env.NODE_ENV!='production'){
    require('dotenv').config()
}
import cors from 'cors'
import express, { Express } from 'express'
import { createUserTable } from './db/usertable'
import { router as userRouter } from './routes/user.route'
const app : Express= express()

app.use(express.json())
app.use(cors())
app.use('/',userRouter);
createUserTable()
app.listen(process.env.PORT,()=>{
    console.log('server started')
})

