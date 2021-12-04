const Router = require("express");
const router = new Router();
const addCustomDishController = require("../controllers/addCustomDishController");

router.get("/", addCustomDishController.getPage);
router.post("/", addCustomDishController.create);

module.exports = router;
