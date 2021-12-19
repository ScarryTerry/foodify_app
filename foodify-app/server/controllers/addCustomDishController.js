const CustDish = require("../model/custDish");

class AddCustomDishController {

  async addCustomDish(req, res) {
    const {dishName, recipe, img} = req.body;

    const existingRecipe = await CustDish.findOne({dishName});

    if (existingRecipe) {
      return res.status(409).json({message: "dish has already added"});
    }

    const dish = await CustDish.create({
      dishName: dishName,
      recipe: recipe,
      img: img,
    });

    return res.status(200).json(dish);
  }
}

module.exports = new AddCustomDishController();
