const Sequelize = require("sequelize");
const db = require("../config/db");

class Ingredient extends Sequelize.Model {}

Ingredient.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "ingredient",
    timestamps: false,
  }
);

module.exports = Ingredient;
