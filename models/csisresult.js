'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class csisResult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      csisResult.belongsTo(models.users);
      models.users.hasMany(csisResult);
    }
  }
  csisResult.init({
    courseName: DataTypes.STRING,
    quiz1: DataTypes.FLOAT,
    midTerm: DataTypes.FLOAT,
    quiz2: DataTypes.FLOAT,
    attendance: DataTypes.FLOAT,
    practical: DataTypes.FLOAT,
    final: DataTypes.FLOAT,
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'csisResult',
  });
  return csisResult;
};