'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('state_school_history', {
      state_school_history_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('state_school_history')
  },
}
