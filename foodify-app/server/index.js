require("dotenv").config();
const express = require("express");
const DishRouter = require("./routes/DishRouter");
const cors = require("cors");

const PORT = process.env.PORT ||7000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", new DishRouter().getRoutes());

const start = () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();
