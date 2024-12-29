import bcrypt from 'bcryptjs'
import db from '../models/index.js'
import jwt from 'jsonwebtoken'
const { User, Role } = db

export async function login(req, res, next) {
  try {
    const { email, password } = req.body
    const user = await User.findOne({
      where: { email },
      attributes: ['user_id', 'first_name_en', 'password', 'refresh_token'],
      include: [
        {
          model: Role,
          as: 'role',
          attributes: ['name'],
        },
      ],
    })
    if (!user)
      return res
        .status(404)
        .json({ message: `User not found with email: ${email}` })
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid password!' })
    }

    // Generate access token
    const token = jwt.sign(
      { id: user.user_id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.JWT_REFRESH_EXPIRATION,
      }
    )
    user.refresh_token = token
    await user.save() // store refresh token in database
    return res.status(200).json(user)
  } catch (err) {
    return res.status(401).json({ message: err.message })
  }
}

