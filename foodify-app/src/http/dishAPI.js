import { $host } from "./index";
import { RANDOM_DISH_ROUTE } from "../utils/consts";


export const getRecipe = async () => {
  const {data} = await $host.get(RANDOM_DISH_ROUTE);

  console.log(data);
}