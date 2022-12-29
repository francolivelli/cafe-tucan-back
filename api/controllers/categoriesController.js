const categories_service = require("../services/categoriesService.js");

// C
// Create category: /api/categories/create
exports.createCategory = (req, res, next) => {
  const category = req.body;
  categories_service
    .createCategory(category)
    .then((createdCategory) => res.status(201).send(createdCategory))
    .catch(next);
};

// R
// Get all categories: /api/categories
exports.getCategories = (req, res, next) => {
    categories_service
    .getCategories()
    .then((categories) => res.status(200).send(categories))
    .catch(next);
};

// U
// Edit category: /api/categories/edit/:id
exports.editCategory = (req, res, next) => {
    const id = req.params.id
    const changes = req.body
    categories_service
    .editCategory(changes, id)
    .then((editedCategory) => res.status(200).send(editedCategory))
    .catch(next)
}

// D
// Delete category: /api/categories/delete/:id
exports.deleteCategory = (req, res, next) => {
    const id = req.params.id
    categories_service
    .deleteCategory(id)
    .then(() => res.status(204).send("Category deleted"))
    .catch(next);
}