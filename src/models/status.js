export default (sequelize, DataTypes) => {
  const Status = sequelize.define(
    'Status',
    {
      status_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: 'status',
    }
  )
  return Status
}
