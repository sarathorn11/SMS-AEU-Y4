'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('student', {
      student_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
      level_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'level',
          key: 'level_id',
        },
      },
      academic_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'academic',
          key: 'academic_id',
        },
      },
      status_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'status',
          key: 'status_id',
        },
      },
      join_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('student')
  },
}
