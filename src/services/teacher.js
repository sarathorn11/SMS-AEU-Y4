import db from '../models/index.js'
const { Teacher } = db
console.log('----------------------------', db)

export async function fetchAllTeachers(req, res, next) {
  try {
    // const { page = 1, limit = 10 } = req.query
    // const offset = (page - 1) * limit
    // const data = await Teacher.findAndCountAll({
    //   limit: parseInt(limit),
    //   offset: parseInt(offset),
    // })
    console.log('---------------------', Teacher)
    const data = await Teacher.findAll()
    return res.status(200).send(data)
  } catch (err) {
    next(err)
  }
}

export async function fetchTeacherById(req, res, next) {
  try {
    const { id } = req.params
    const teacher = await Teacher.findByPk(id)
    if (!teacher) return res.status(404).send({ message: 'Teacher not found!' })
    return res.status(200).send(teacher)
  } catch (err) {
    return res.status(500).send({ message: 'Internal server error!', ...err })
  }
}

export async function addTeacher(req, res, next) {
  try {
    const teacher = await Teacher.create(req.body)
    return res.status(201).send(teacher)
  } catch (err) {
    return res.status(500).send({ message: 'Internal server error!', ...err })
  }
}

export async function modifyTeacher(req, res, next) {
  try {
    const { id } = req.params
    const [updated] = await Teacher.update(req.body, {
      where: { id: id },
    })
    if (!updated) return res.status(404).send({ message: 'Teacher not found!' })
    const updatedTeacher = await Teacher.findByPk(id)
    return res.status(200).send(updatedTeacher)
  } catch (err) {
    return res.status(500).send({ message: 'Internal server error!', ...err })
  }
}

export async function removeTeacher(req, res, next) {
  try {
    const { id } = req.params
    const deleted = await Teacher.destroy({
      where: { id: id },
    })
    if (!deleted) return res.status(404).send({ message: 'Teacher not found!' })
    return res.status(204).send()
  } catch (err) {
    return res.status(500).send({ message: 'Internal server error!', ...err })
  }
}
