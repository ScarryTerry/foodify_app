import favorites from './pages/favorites';
import randomDish from './pages/randomDish';
import {FAVORITES_ROUTE, RANDOM_DISH_ROUTE} from './utils/consts';
// import addCustomDish from "./pages/addCustomDish";

export const publicRoutes = [
    {
        path: FAVORITES_ROUTE,
        Component: favorites
    },
    {
        path: RANDOM_DISH_ROUTE,
        Component: randomDish
    }
]
