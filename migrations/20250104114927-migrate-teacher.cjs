'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('teacher', {
      teacher_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      major: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      join_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id',
        },
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('teacher')
  },
}
