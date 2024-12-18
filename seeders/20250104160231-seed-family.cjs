'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'family',
      [
        {
          student_id: 1,
          father_name_en: 'John Doe',
          father_name_kh: 'ចន ដូ',
          mother_name_en: 'Jane Doe',
          mother_name_kh: 'ជេន ដូ',
          father_age: 45,
          mother_age: 43,
          mother_job: 'Teacher',
          father_job: 'Engineer',
          mother_living: true,
          father_living: true,
          parent_relation: 'Married',
          poverty: 2,
          income: 5000.0,
          contact: '123456789',
          student_live_with: 'Parents',
        },
        {
          student_id: 2,
          father_name_en: 'Michael Smith',
          father_name_kh: 'ម៉ៃខល ស្មីត',
          mother_name_en: 'Sarah Smith',
          mother_name_kh: 'សារ៉ា ស្មីត',
          father_age: 50,
          mother_age: 48,
          mother_job: 'Nurse',
          father_job: 'Doctor',
          mother_living: true,
          father_living: true,
          parent_relation: 'Married',
          poverty: 1,
          income: 8000.0,
          contact: '987654321',
          student_live_with: 'Parents',
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('family', null, {})
  },
}
