'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class csisStudent extends Model {
    static associate(models) {
      csisStudent.belongsTo(models.users);
      models.users.hasMany(csisStudent);
    }
  }
  csisStudent.init({
    level: DataTypes.INTEGER,
    nationality: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'csisStudent',
  
  });
  return csisStudent;
};