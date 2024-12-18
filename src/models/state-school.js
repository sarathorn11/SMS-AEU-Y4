export default (sequelize, DataTypes) => {
  const StateSchool = sequelize.define(
    'StateSchool',
    {
      state_school_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      timestamps: false,
      tableName: 'state_school',
    }
  )
  return StateSchool
}
