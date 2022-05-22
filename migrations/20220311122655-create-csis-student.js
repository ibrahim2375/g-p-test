'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('csisStudents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      level: {
        type: Sequelize.INTEGER
      },
      nationality: {
        type: Sequelize.STRING
      },
      department:{
        type: Sequelize.STRING
      },
      gpas: {
        type: Sequelize.FLOAT
      },
      TotalHours: {
        type: Sequelize.INTEGER
      },
      TotalHoursOfAllMaterial: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      studentId: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('csisStudents');
  }
};