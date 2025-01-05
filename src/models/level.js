export default (sequelize, DataTypes) => {
  const Level = sequelize.define(
    'Level',
    {
      level_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      level_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      tableName: 'level',
    }
  )
  return Level
}
