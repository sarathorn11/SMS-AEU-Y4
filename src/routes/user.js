import { Router } from 'express'
import { getAllUsers, getUserById } from '../services/user.js'
const userRoutes = new Router()

userRoutes.get('/', getAllUsers)

userRoutes.get('/:id', getUserById)

export default userRoutes
