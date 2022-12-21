const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const morgan = require("morgan");
app.use(morgan("tiny"));

const models = require("./models");

const routes = require("./routes");
app.use("/api", routes);

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "../.env" });
}

const PORT = process.env.PORT || 3000;

const db = require("./config/db");

db.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is listening on port", PORT);
    });
  })
  .catch((error) => console.log("There was an error:", error));
