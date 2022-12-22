const Category = require("./Category");
const Ingredient = require("./Ingredient");
const Product = require("./Product");
const ProductVariant = require("./ProductVariant");
const User = require("./User");

Product.belongsTo(Category);
Category.hasMany(Product);

ProductVariant.belongsTo(Product);
Product.hasMany(ProductVariant);

ProductVariant.hasMany(Ingredient);
Ingredient.belongsTo(ProductVariant);

module.exports = {
  Category,
  Ingredient,
  Product,
  ProductVariant,
  User,
};
