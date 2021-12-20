require("dotenv").config();
const express = require("express");
const DishRouter = require("./routes/DishRouter");
const cors = require("cors");
const db = require("./db/mongoConnection");
const path = require('path')

const PORT = process.env.PORT ||7000;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use("/dish", new DishRouter().getRoutes());

const start = () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    db.connect();
  } catch (e) {
    console.log(e);
  }
}

start();
