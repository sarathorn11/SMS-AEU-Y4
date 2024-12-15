import express from 'express'
import userRoutes from './routes/user.js'
import roleRoutes from './routes/role.js'

const app = express()
app.use(express.json())

// Routes
app.use('/user', userRoutes)
app.use('/role', roleRoutes)

export default app
