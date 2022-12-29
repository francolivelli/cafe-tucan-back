const products_service = require("../services/productsService.js");

// CREATE
exports.createProduct = (req, res, next) => {
    const product = req.body;
    products_service
      .createProduct(product)
      .then((createdProduct) => res.status(201).send(createdProduct))
      .catch(next);
  };

// READ

// UPDATE

// DELETE