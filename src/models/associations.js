const associate = (models) => {
  const { User, Role } = models
  Role.hasMany(User, { foreignKey: 'role_id' })
  User.belongsTo(Role, { foreignKey: 'role_id' })
}

export default associate
