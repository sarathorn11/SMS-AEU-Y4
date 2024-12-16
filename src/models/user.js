export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name_en: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name_en: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      first_name_kh: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name_kh: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      refresh_token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      gender: {
        type: DataTypes.ENUM('Male', 'Female'),
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profile: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      religious: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      health_status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'user',
      timestamps: true,
    }
  )
  return User
}
