'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'academic',
      [
        {
          year: 2021,
          start_date: new Date('2021-01-01'),
          end_date: new Date('2021-12-31'),
          description: 'Academic year 2021',
        },
        {
          year: 2022,
          start_date: new Date('2022-01-01'),
          end_date: new Date('2022-12-31'),
          description: 'Academic year 2022',
        },
        {
          year: 2023,
          start_date: new Date('2023-01-01'),
          end_date: new Date('2023-12-31'),
          description: 'Academic year 2023',
        },
        {
          year: 2024,
          start_date: new Date('2024-01-01'),
          end_date: new Date('2024-12-31'),
          description: 'Academic year 2024',
        },
        {
          year: 2025,
          start_date: new Date('2025-01-01'),
          end_date: new Date('2025-12-31'),
          description: 'Academic year 2025',
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('academic', null, {})
  },
}
