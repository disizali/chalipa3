"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      subtitle: DataTypes.TEXT,
      details: DataTypes.TEXT,
      technicalTable: DataTypes.TEXT,
      category: DataTypes.TEXT,
      image: DataTypes.STRING
    },
    {}
  );
  Product.associate = function(models) {
    Product.belongsTo(models.Category, {
      foreignKey: "category"
    });
  };
  return Product;
};