const Sequelize = require("sequelize");
const db = require("../config/db");

class Product extends Sequelize.Model {}

Product.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    variants: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "product",
    timestamps: false,
  }
);

module.exports = Product;
