'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('school_history', {
      school_history_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('school_history')
  },
}
