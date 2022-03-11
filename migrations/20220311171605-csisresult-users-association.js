'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    queryInterface.addConstraint('csisResults', {
      fields: ['studentId'],
      type: 'foreign Key',
      name: 'csisResult_users_association',
      references: {
        table: 'users',
        field: 'id'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint('csisResults', {
      fields: ['studentId'],
      type: 'foreign Key',
      name: 'csisResult_users_association',
      references: {
        table: 'users',
        field: 'id'
      }
    });
  }
};
