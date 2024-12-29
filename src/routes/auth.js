import { Router } from 'express'
import { login } from '../services/auth.js'
const authRoutes = new Router()

authRoutes.post('/login', login)
export default authRoutes
