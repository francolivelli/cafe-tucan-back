const express = require("express");
const router = express.Router();
const products_controller = require("../controllers/productsController.js");

// CREATE
router.post("/create", products_controller.createProduct);

// READ

// UPDATE

// DELETE

module.exports = router;