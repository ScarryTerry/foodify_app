import { $host } from "./index";


export const getRecipe = async () => {
  const {data} = await $host.get("/randomDish");

  console.log(data);
}