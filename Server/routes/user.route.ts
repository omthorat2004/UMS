
import * as dotenv from 'dotenv'
import express, { Router } from 'express'

import { Login, Sign } from '../controller/auth.controller'
import { getUsers } from '../controller/user.controller'
export const router:Router = express.Router()
dotenv.config()


router.post('/sign',Sign)

router.post('/login',Login)

router.get('/users',getUsers)



