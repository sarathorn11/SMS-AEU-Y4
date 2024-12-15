import db from '../models/index.js'
const { User } = db

export async function getAllUsers(req, res, next) {
  try {
    const users = await User.findAll()
    return res.status(200).send(users)
  } catch (err) {
    next(err)
  }
}
