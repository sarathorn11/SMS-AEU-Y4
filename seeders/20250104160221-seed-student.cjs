'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'student',
      [
        {
          student_id: 1,
          user_id: 1,
          level_id: 1,
          academic_id: 1,
          status_id: 1,
          join_date: new Date(),
        },
        {
          student_id: 2,
          user_id: 2,
          level_id: 2,
          academic_id: 2,
          status_id: 2,
          join_date: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('student', null, {})
  },
}
