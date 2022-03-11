'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class registration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      registration.belongsTo(models.users);
      models.users.hasMany(registration);
    }
  }
  registration.init({
    courseName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'registration',
  });
  return registration;
};