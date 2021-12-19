const router = require("express").Router();
const RandomDishController = require("../controllers/randomDishController");
const FavoritesDishController = require("../controllers/favoritesController");
const AddCustomDishController = require("../controllers/addCustomDishController");

class DishRouter {

  getRoutes() {
    router.get("/randomDish", (req, res) => (RandomDishController.getPage(req, res)));

    router.post("/addFavorites", (req, res) => (FavoritesDishController.addToFavorites(req, res)));

    router.post("/removeFavorites", (req, res) => (FavoritesDishController.removeFromFavorites(req, res)));

    router.post("/addCustomDish", (req, res) => (AddCustomDishController.addCustomDish(req, res)));

    return router;
  }
}


module.exports = DishRouter;
