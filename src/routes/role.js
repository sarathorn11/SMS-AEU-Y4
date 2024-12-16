import { Router } from 'express'
import { getAllRoles } from '../services/role.js'
const roleRoutes = new Router()

// Get all users
roleRoutes.get('/', getAllRoles)

export default roleRoutes
