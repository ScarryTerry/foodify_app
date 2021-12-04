const Router = require("express");
const router = new Router();
const addCustomDishRouter = require("./addCustomDishRouter");
const favoritesRouter = require("./favoritesRouter");
const randomDishRouter = require("./randomDishRouter");

router.use("/favorites", favoritesRouter);
router.use("/randomDish", randomDishRouter);
router.use("/addCustomDish", addCustomDishRouter);

module.exports = router;
