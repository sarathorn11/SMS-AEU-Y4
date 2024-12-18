'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'teacher',
      [
        {
          major: 'Mathematics',
          join_date: new Date(),
          user_id: 1,
        },
        {
          major: 'Physics',
          join_date: new Date(),
          user_id: 2,
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('teacher', null, {})
  },
}
