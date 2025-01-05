export default (sequelize, DataTypes) => {
  const Family = sequelize.define(
    'Family',
    {
      family_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      student_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'student',
          key: 'student_id',
        },
      },
      father_name_en: {
        type: DataTypes.STRING,
      },
      father_name_kh: {
        type: DataTypes.STRING,
      },
      mother_name_en: {
        type: DataTypes.STRING,
      },
      mother_name_kh: {
        type: DataTypes.STRING,
      },
      father_age: {
        type: DataTypes.INTEGER,
      },
      mother_age: {
        type: DataTypes.INTEGER,
      },
      mother_job: {
        type: DataTypes.STRING,
      },
      father_job: {
        type: DataTypes.STRING,
      },
      mother_living: {
        type: DataTypes.BOOLEAN,
      },
      father_living: {
        type: DataTypes.BOOLEAN,
      },
      parent_relation: {
        type: DataTypes.STRING,
      },
      poverty: {
        type: DataTypes.INTEGER,
      },
      income: {
        type: DataTypes.FLOAT,
      },
      contact: {
        type: DataTypes.STRING,
      },
      student_live_with: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: 'family',
    }
  )
  return Family
}
