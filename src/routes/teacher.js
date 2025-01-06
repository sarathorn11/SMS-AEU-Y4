import { Router } from 'express'
import {
  fetchAllTeachers,
  fetchTeacherById,
  addTeacher,
  modifyTeacher,
  removeTeacher,
} from '../services/teacher.js'

const teacherRoutes = new Router()

teacherRoutes.get('/', fetchAllTeachers)
teacherRoutes.get('/:id', fetchTeacherById)
teacherRoutes.post('/', addTeacher)
teacherRoutes.put('/:id', modifyTeacher)
teacherRoutes.delete('/:id', removeTeacher)

export default teacherRoutes
