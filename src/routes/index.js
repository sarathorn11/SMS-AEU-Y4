import { Router } from 'express'
import userRoutes from './user.js'
import roleRoutes from './role.js'
import authRoutes from './auth.js'
const apiRouter = Router()

apiRouter.use('/user', userRoutes)
apiRouter.use('/role', roleRoutes)
apiRouter.use('/auth', authRoutes)
export default apiRouter
