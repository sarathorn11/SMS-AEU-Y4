export default (sequelize, DataTypes) => {
  const SchoolHistory = sequelize.define(
    'SchoolHistory',
    {
      school_history_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      timestamps: false,
      tableName: 'school_history',
    }
  )
  return SchoolHistory
}
