module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('role', [
      {
        role_id: 1,
        name: 'Admin',
        description: 'Administrator role with full access',
      },
      {
        role_id: 2,
        name: 'User',
        description: 'Regular user role',
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('role', null, {})
  },
}
