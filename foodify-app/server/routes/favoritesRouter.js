const Router = require("express");
const router = new Router();
const favoritesDishController = require("../controllers/favoritesController");

router.get("/", favoritesDishController.getPage);


module.exports = router;
