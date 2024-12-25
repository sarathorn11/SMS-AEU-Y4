const associate = (models) => {
  const { User, Role } = models

  // associations between User and Role
  Role.hasMany(User, { foreignKey: 'role_id', as: 'user' })
  User.belongsTo(Role, { foreignKey: 'role_id', as: 'role' })
}

export default associate
