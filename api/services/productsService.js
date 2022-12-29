const {Product, Category} = require("../models")
const sequelize = require("sequelize");

// CREATE
exports.createProduct = async (product) => {
    const {
      name,
      description,
      price,
      variants
    } = product;
    let createdProduct = await Product.create({
        name: name,
        description: description,
        price: price,
        variants: variants,
    });
    // let category = await subCategoriesServices.findByUrl(urlSubCategory);
    // let subject = await subjectServices.findById(idSubject);
    // noteCreated.setSubCategory(subcategory);
    // subject.setNote(noteCreated);
    // return noteCreated;
  };

// READ

// UPDATE

// DELETE