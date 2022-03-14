'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint('instructors', {
      fields: ['instructorId'],
      type: 'foreign Key',
      name: 'instructor_users_association',
      references: {
        table: 'users',
        field: 'id'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint('instructors', {
      fields: ['instructorId'],
      type: 'foreign Key',
      name: 'instructor_users_association',
      references: {
        table: 'users',
        field: 'id'
      }
    });
  }
};
