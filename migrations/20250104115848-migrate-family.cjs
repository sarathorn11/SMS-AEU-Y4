'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('family', {
      family_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      student_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'student',
          key: 'student_id',
        },
      },
      father_name_en: {
        type: Sequelize.STRING,
      },
      father_name_kh: {
        type: Sequelize.STRING,
      },
      mother_name_en: {
        type: Sequelize.STRING,
      },
      mother_name_kh: {
        type: Sequelize.STRING,
      },
      father_age: {
        type: Sequelize.INTEGER,
      },
      mother_age: {
        type: Sequelize.INTEGER,
      },
      mother_job: {
        type: Sequelize.STRING,
      },
      father_job: {
        type: Sequelize.STRING,
      },
      mother_living: {
        type: Sequelize.BOOLEAN,
      },
      father_living: {
        type: Sequelize.BOOLEAN,
      },
      parent_relation: {
        type: Sequelize.STRING,
      },
      poverty: {
        type: Sequelize.INTEGER,
      },
      income: {
        type: Sequelize.FLOAT,
      },
      contact: {
        type: Sequelize.STRING,
      },
      student_live_with: {
        type: Sequelize.STRING,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('family')
  },
}
