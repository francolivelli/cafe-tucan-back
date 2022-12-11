const Sequelize = require("sequelize");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "../.env" });
}

const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST

const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "postgres",
  logging: false,
});

module.exports = db;