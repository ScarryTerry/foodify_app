require("dotenv").config();
const express = require("express");
const DishRouter = require("./routes/DishRouter");

const PORT = process.env.PORT || 3007;

const app = express();
app.use(express.json());
app.use("/",  new DishRouter().getRoutes());

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
