const Router = require("express");
const router = new Router();
const randomDishController = require("../controllers/randomDishController");

router.get("/", randomDishController.getPage);


module.exports = router;
