import express, { Router } from 'express'
import { checkAuth, logout } from '../controllers/authControllers.js'

export const authRoutes = Router()

authRoutes.get('/check-auth' , checkAuth)
authRoutes.get('/logout' , logout)