import express from 'express'
import cors from 'cors'
import apiRoutes from './routes/index.js'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', verifyToken, apiRoutes)
function verifyToken(req, res, next) {
  try {
    if (req.url === '/auth/login') return next()

    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      return res.status(403).json({ message: 'No token provided!' })
    }
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    req.userId = decoded.id
    next()
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token!' })
    } else if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token has expired!' })
    } else {
      return res.status(500).json({ message: 'Internal server error!' })
    }
  }
}

export default app
