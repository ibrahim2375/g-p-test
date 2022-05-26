'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('materials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      materialName: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      college: {
        type: Sequelize.STRING
      },
      hours: {
        type: Sequelize.FLOAT
      },
      semester: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.INTEGER
      },

      prerequisites: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('materials');
  }
};