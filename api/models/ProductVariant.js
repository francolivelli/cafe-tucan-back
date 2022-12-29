const Sequelize = require("sequelize");
const db = require("../config/db");

class ProductVariant extends Sequelize.Model {}

ProductVariant.init(
  {
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "product_variant",
    timestamps: false,
  }
);

module.exports = ProductVariant;
