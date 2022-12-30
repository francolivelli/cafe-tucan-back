const express = require("express");
const router = express.Router();
const products_controller = require("../controllers/productsController.js");

// CREATE
// Create product: /api/products/create
router.post("/create", products_controller.createProduct);

// R
// Get all products: /api/products
router.get("/", products_controller.getProducts)

// U
// Edit product: /api/products/edit/:id
router.put("/edit/:id", products_controller.editProduct)

// D
// Delete product: /api/products/delete/:id
router.delete("/delete/:id", products_controller.deleteProduct)

module.exports = router;