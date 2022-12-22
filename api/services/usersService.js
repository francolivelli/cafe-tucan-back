const { User } = require("../models");

// CREATE
// Register
exports.createUser = (user) => {
  return User.create(user);
};

// READ

// UPDATE

// DELETE
