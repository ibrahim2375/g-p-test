'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint('registrations', {
      fields: ['studentId'],
      type: 'foreign Key',
      name: 'registration_users_association',
      references: {
        table: 'users',
        field: 'id'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint('registrations', {
      fields: ['studentId'],
      type: 'foreign Key',
      name: 'registration_users_association',
      references: {
        table: 'users',
        field: 'id'
      }
    });
  }
};
