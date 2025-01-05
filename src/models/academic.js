export default (sequelize, DataTypes) => {
  const Academic = sequelize.define(
    'Academic',
    {
      academic_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      tableName: 'academic',
    }
  )
  return Academic
}
