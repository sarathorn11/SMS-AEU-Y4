export default (sequelize, DataTypes) => {
  const StateSchoolHistory = sequelize.define(
    'StateSchoolHistory',
    {
      state_school_history_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      timestamps: false,
      tableName: 'state_school_history',
    }
  )
  return StateSchoolHistory
}
