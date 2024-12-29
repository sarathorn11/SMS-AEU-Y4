export default (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role',
    {
      role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'role',
    }
  )
  return Role
}
