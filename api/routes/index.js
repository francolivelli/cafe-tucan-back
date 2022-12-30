const express = require("express");
const router = express.Router();

const categories = require("./categories.js");
const products = require("./products.js");
const users = require("./users.js");

router.use("/categories", categories);
router.use("/products", products);
router.use("/users", users);

module.exports = router;