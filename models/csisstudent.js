'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class csisStudent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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