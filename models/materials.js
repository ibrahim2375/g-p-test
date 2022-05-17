'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class materials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  materials.init({
    materialName: DataTypes.STRING,
    level: DataTypes.INTEGER,
    code: DataTypes.INTEGER,
    college: DataTypes.STRING,
    hours: DataTypes.FLOAT,
    semester: DataTypes.STRING,
    total: DataTypes.INTEGER,
    prerequisites: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'materials',
  });
  return materials;
};