'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class parent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      parent.belongsTo(models.users);
      models.users.hasMany(parent);
    }
  }
  parent.init({
    name: DataTypes.STRING,
    key: DataTypes.STRING,
    nationality: DataTypes.STRING,
    permission: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'parent',
  });
  return parent;
};