const express = require("express");
const morgan = require("morgan")

const app = express();

app.use(express.json())
app.use(morgan("tiny"))

require("dotenv").config()

app.listen(process.env.PORT, ()=>{
    console.log("Server running on port", process.env.PORT)
})
