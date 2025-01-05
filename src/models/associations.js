const associate = (models) => {
  const { User, Role, Teacher, Student, Status, Level, Family, Academic } =
    models

  // associations between User and Role
  Role.hasMany(User, { foreignKey: 'role_id', as: 'user' })
  User.belongsTo(Role, { foreignKey: 'role_id', as: 'role' })

  // associations for User
  User.hasOne(Teacher, { foreignKey: 'user_id', as: 'teacher' })
  User.hasOne(Student, { foreignKey: 'user_id', as: 'student' })

  // associations for Teacher
  Teacher.belongsTo(User, { foreignKey: 'user_id', as: 'user' })

  // associations for Student
  Student.belongsTo(User, { foreignKey: 'user_id', as: 'user' })
  Student.belongsTo(Level, { foreignKey: 'level_id', as: 'level' })
  Student.belongsTo(Academic, { foreignKey: 'academic_id', as: 'academic' })
  Student.belongsTo(Status, { foreignKey: 'status_id', as: 'status' })
  Student.hasOne(Family, { foreignKey: 'student_id', as: 'family' })

  // associations for Status
  Status.hasMany(Student, { foreignKey: 'status_id', as: 'students' })

  // associations for Level
  Level.hasMany(Student, { foreignKey: 'level_id', as: 'students' })

  // associations for Family
  Family.belongsTo(Student, { foreignKey: 'student_id', as: 'student' })

  // associations for Academic
  Academic.hasMany(Student, { foreignKey: 'academic_id', as: 'students' })
}

export default associate
