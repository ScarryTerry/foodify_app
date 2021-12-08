const FoodifyAPI = require("../API/foodifyAPI");

class RandomDishController {

  async getPage(req, res) {
    const randomDish = await new FoodifyAPI().getRecipe(); 
    return console.log(randomDish);
  }
}

module.exports = RandomDishController;
