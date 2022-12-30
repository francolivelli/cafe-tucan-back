const { Product, Category } = require("../models");
const sequelize = require("sequelize");

// C
// Create product: /api/products/create
exports.createProduct = async (product) => {
  const productCategory = product.category;
  let category = await Category.findOne({
    where: { name: productCategory },
  });
  const newProduct = {
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image,
    categoryId: category.dataValues.id,
  };
  const createdProduct = await Product.create(newProduct);
  return createdProduct;
};

// READ
// Get all products: /api/products
exports.getProducts = async () => {
  let products = await Product.findAll();
  return products;
};

// UPDATE
// Edit product: /api/products/edit/:id
exports.editProduct = async (changes, id) => {
  let categoryName = changes.category;
  let category = await Category.findOne({ where: { name: categoryName } });
  let props = {
    name: changes.name,
    description: changes.description,
    price: changes.price,
    image: changes.image,
    categoryId: category.dataValues.id,
  }
  let editedProduct = await Product.update(props, {
    where: {id}
  })
  return editedProduct
};

// DELETE
// Delete product: /api/products/delete/:id
exports.deleteProduct = async (id) => {
  let deleteProduct = await Product.destroy({ where: { id } });
  return deleteProduct;
};
