const express = require("express");
const router = express.Router();
const users_controller = require("../controllers/usersController.js");

// CREATE
// Register
router.post("/register", users_controller.createUser);

// READ

// UPDATE

// DELETE

module.exports = router;