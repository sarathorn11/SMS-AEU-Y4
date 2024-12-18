'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'state_school',
      [
        { state_school_id: 1 /* other fields */ },
        { state_school_id: 2 /* other fields */ },
        { state_school_id: 3 /* other fields */ },
        { state_school_id: 4 /* other fields */ },
        { state_school_id: 5 /* other fields */ },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('state_school', null, {})
  },
}
