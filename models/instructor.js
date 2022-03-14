'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class instructor extends Model {
    static associate(models) {
      instructor.belongsTo(models.users);
      models.users.hasMany(instructor);
    }
  }
  instructor.init({
    courseName: DataTypes.STRING,
    nationality: DataTypes.STRING,
    college: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'instructor',
  });
  return instructor;
};