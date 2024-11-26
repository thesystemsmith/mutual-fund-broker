'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MutualFund extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MutualFund.init({
    name: DataTypes.STRING,
    nav: DataTypes.FLOAT,
    fundFamilyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MutualFund',
  });
  return MutualFund;
};