'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
      {
        user_id: 1,
        first_name_en: 'John',
        last_name_en: 'Doe',
        email: 'admin@example.com',
        password: 'hashed_password', // Make sure to hash passwords in real apps
        role_id: 1,
        gender: 'Male',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        first_name_en: 'Jane',
        last_name_en: 'Doe',
        email: 'user@example.com',
        password: 'hashed_password', // Make sure to hash passwords in real apps
        role_id: 2,
        gender: 'Female',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {})
  },
}
