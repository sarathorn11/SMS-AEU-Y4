'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'status',
      [{ name: 'Enrolled' }, { name: 'Graduated' }, { name: 'Dropped Out' }],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('status', null, {})
  },
}
