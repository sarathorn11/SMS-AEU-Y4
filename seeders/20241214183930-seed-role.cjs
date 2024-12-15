module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('role', [
      {
        role_id: 1,
        name: 'Admin',
        description: 'Administrator role with full access',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        name: 'User',
        description: 'Regular user role',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('role', null, {})
  },
}
