import db from '../models/index.js'
const { User, Role } = db

export async function getAllUsers(req, res, next) {
  try {
    const users = await User.findAll()
    return res.status(200).send(users)
  } catch (err) {
    next(err)
  }
}
export async function getUserById(req, res, next) {
  try {
    const { id } = req.params
    const user = await User.findByPk(id, {
      include: {
        model: Role,
        as: 'role',
        attributes: ['role_id', 'name'],
      },
    })
    if (!user) return res.status(404).send({ message: 'User not found!' })
    return res.status(200).send(user)
  } catch (err) {
    return res.status(500).send({ message: 'Internal server error!', ...err })
  }
}
