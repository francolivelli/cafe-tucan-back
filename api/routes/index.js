const express = require("express");
const router = express.Router();

const categories = require("./categories.js");
const ingredients = require("./ingredients.js");
const products = require("./products.js");
const productVariants = require("./productVariants.js");
const users = require("./users.js");

router.use("/categories", categories);
router.use("/ingredients", ingredients);
router.use("/products", products);
router.use("/productVariants", productVariants);
router.use("/users", users);

module.exports = router;