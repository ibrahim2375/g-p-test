'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint('parents', {
      fields: 'sonId',
      type: 'foreign Key',
      name: 'parent_users_association',
      references: {
        table: 'users',
        field: 'id'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint('parents', {
      fields: 'sonId',
      type: 'foreign Key',
      name: 'parent_users_association',
      references: {
        table: 'users',
        field: 'id'
      }
    });
  }
};
