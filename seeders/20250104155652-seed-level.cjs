'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'level',
      [
        {
          level_name: 'Beginner',
          description: 'Entry level',
        },
        {
          level_name: 'Intermediate',
          description: 'Intermediate level',
        },
        {
          level_name: 'Advanced',
          description: 'Advanced level',
        },
        {
          level_name: 'Expert',
          description: 'Expert level',
        },
        {
          level_name: 'Master',
          description: 'Master level',
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('level', null, {})
  },
}
