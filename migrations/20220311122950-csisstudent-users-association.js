'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint('csisStudents', {
      fields: ['studentId'],
      type: 'foreign Key',
      name: 'csisStudent_users_association',
      references: {
        table: 'users',
        field: 'id'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint('csisStudents', {
      fields: ['studentId'],
      type: 'foreign Key',
      name: 'csisStudent_users_association',
      references: {
        table: 'users',
        field: 'id'
      }
    })
  }
};
