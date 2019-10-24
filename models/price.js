'use strict';
module.exports = (sequelize, DataTypes) => {
  const Price = sequelize.define('Price', {
    code: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Price.associate = function(models) {
    // associations can be defined here
  };
  return Price;
};