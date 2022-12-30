const products_service = require("../services/productsService.js");

// C
// Create product: /api/products/create
exports.createProduct = (req, res, next) => {
    const product = req.body;
    products_service
      .createProduct(product)
      .then((createdProduct) => res.status(201).send(createdProduct))
      .catch(next);
  };

// R
// Get all products: /api/products
exports.getProducts = (req, res, next) => {
  products_service
  .getProducts()
    .then((products) => res.status(200).send(products))
    .catch(next);
}

// U
// Edit product: /api/products/edit/:id
exports.editProduct = (req, res, next) => {
  const id = req.params.id
  const changes = req.body
  products_service
  .editProduct(changes, id)
  .then((editedProduct) => res.status(200).send(editedProduct))
  .catch(next)
}

// D
// Delete product: /api/products/delete/:id
exports.deleteProduct = (req, res, next) => {
  const id = req.params.id
  products_service
  .deleteProduct(id)
  .then(() => res.status(204).send("Product deleted"))
  .catch(next);
}