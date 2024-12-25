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
        password:
          '$2a$12$QEGUn8fm296wHFXhht8OQeKdWl6m4H564ZB7oxGpSaM63u/rJ/V1u', // plain text is:  hashed_password
        role_id: 1,
        gender: 'Male',
        active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        first_name_en: 'Jane',
        last_name_en: 'Doe',
        email: 'user@example.com',
        password:
          '$2a$12$QEGUn8fm296wHFXhht8OQeKdWl6m4H564ZB7oxGpSaM63u/rJ/V1u', // plain text is:  hashed_password
        role_id: 2,
        gender: 'Female',
        active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {})
  },
}
