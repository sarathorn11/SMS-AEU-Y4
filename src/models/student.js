export default (sequelize, DataTypes) => {
  const Student = sequelize.define(
    'Student',
    {
      student_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user', // name of the target model
          key: 'user_id', // key in the target model
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
      level_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'level',
          key: 'level_id',
        },
      },
      academic_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'academic',
          key: 'academic_id',
        },
      },
      status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'status',
          key: 'status_id',
        },
      },
      join_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: 'student',
    }
  )
  return Student
}
