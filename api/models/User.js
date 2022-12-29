const Sequelize = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class User extends Sequelize.Model {}

// {
//   hash(password, salt) {
//     return bcrypt.hash(password, salt);
//   }
//   validatePassword(password) {
//     return this.hash(password, this.salt).then(
//       (newHash) => newHash === this.pass
//     );
//   }
// }

User.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Field cannot be empty." },
        isAlpha: {
          args: true,
          msg: "Name can only contain letters.",
        },
      },
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Field cannot be empty." },
        isAlpha: {
          args: true,
          msg: "Surname can only contain letters.",
        },
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: "Field must be filled with a valid email.",
        },
      },
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salt: {
      type: Sequelize.STRING,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isLoggedIn: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: "user", timestamps: false }
);

// User.beforeCreate((user) => {
//   const salt = bcrypt.genSaltSync();

//   user.salt = salt;

//   return user.hash(user.pass, salt).then((hash) => {
//     user.pass = hash;
//   });
// });

// User.beforeUpdate((user) => {
//   User.findOne({ where: { id: user.id } }).then((userOld) => {
//     if (user.pass !== userOld.pass) {
//       const salt = bcrypt.genSaltSync();
//       user.salt = salt;
//       return bcrypt.hash(user.pass, salt).then((hash) => {
//         user.pass = hash;
//       });
//     }
//   });
// });

User.afterCreate((user) => {
  if (user.id == 1) {
    User.update({ isAdmin: true }, { where: { id: 1 } });
  }
});

module.exports = User;
