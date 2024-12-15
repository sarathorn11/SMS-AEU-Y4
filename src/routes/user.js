import { Router } from 'express'
import { getAllUsers } from '../services/user.js'
const userRoutes = new Router()

// Get all users
userRoutes.get('/', getAllUsers)

// // Get user by ID
// router.get('/:id', (req, res) => {
//   const user = getUserById(req.params.id)
//   res.json(user)
// })

// // Create a new user
// router.post('/', async (req, res) => {
//   const newUser = await createUser(req.body)
//   res.status(201).json(newUser)
// })

export default userRoutes
