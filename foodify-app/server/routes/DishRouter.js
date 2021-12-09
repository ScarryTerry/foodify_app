const router = require("express").Router();
const RandomDishController = require("../controllers/randomDishController");
const FavoritesDishController = require("../controllers/favoritesController");
const AddCustomDishController = require("../controllers/addCustomDishController");

class DishRouter {

  getRoutes() {
    router.get("/randomDish", (req, res) => (new RandomDishController().getPage(req, res)));

    router.get("/favorites", (req, res) => (new FavoritesDishController().getPage(req, res)));

    router.get("/addCustomDish", (req, res) => (new AddCustomDishController().getPage(req, res)));

    return router;
  }
}


module.exports = DishRouter;
