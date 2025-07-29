import express, { Router } from 'express'
import { userLogin, userSignup } from '../controllers/userControllers.js'

export const userRoutes = Router()

userRoutes.post('/signup' , userSignup)
userRoutes.post('/login' , userLogin)