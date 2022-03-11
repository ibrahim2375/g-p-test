'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('csisResults', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentId: {
        type: Sequelize.INTEGER
      },
      courseName: {
        type: Sequelize.STRING
      },
      quiz1: {
        type: Sequelize.FLOAT
      },
      midTerm: {
        type: Sequelize.FLOAT
      },
      quiz2: {
        type: Sequelize.FLOAT
      },
      attendance: {
        type: Sequelize.FLOAT
      },
      practical: {
        type: Sequelize.FLOAT
      },
      final: {
        type: Sequelize.FLOAT
      },
      total: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('csisResults');
  }
};