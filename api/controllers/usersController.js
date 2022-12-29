const users_service = require("../services/usersService.js");

// CREATE
// Register
exports.createUser = (req, res) => {
  const user = req.body;
  users_service
    .createUser(user)
    .then((newUser) => {
      // emailService.sendRegisterEmail(newUser);
      res.status(201).send(newUser);
    })
    .catch((err) => res.status(400).send(err));
};

// READ

// UPDATE

// DELETE
