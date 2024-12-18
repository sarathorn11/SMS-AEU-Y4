export default (sequelize, DataTypes) => {
  const Teacher = sequelize.define(
    'Teacher',
    {
      teacher_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      major: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hire_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id',
        },
      },
    },
    {
      timestamps: false,
      tableName: 'teacher',
    }
  )
  return Teacher
}
