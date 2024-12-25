import db from '../models/index.js'
const { Role } = db

export async function getAllRoles(req, res, next) {
  try {
    const roles = await Role.findAll()
    return res.status(200).send(roles)
  } catch (err) {
    res.status(500).send({ message: 'Internal server error!', ...err })
  }
}
