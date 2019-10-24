'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: DataTypes.STRING,
    parent_category: DataTypes.INTEGER,
    description: DataTypes.TEXT,
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};