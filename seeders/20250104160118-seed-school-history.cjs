'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'school_history',
      [
        {
          school_history_id: 1,
          // Add other fields as necessary
        },
        {
          school_history_id: 2,
          // Add other fields as necessary
        },
        {
          school_history_id: 3,
          // Add other fields as necessary
        },
        {
          school_history_id: 4,
          // Add other fields as necessary
        },
        {
          school_history_id: 5,
          // Add other fields as necessary
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('school_history', null, {})
  },
}
