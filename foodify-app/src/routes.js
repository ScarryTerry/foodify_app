import favorites from './pages/favorites';
import randomDish from './pages/randomDish';
// import addCustomDish from "./pages/addCustomDish";

export const publicRoutes = [
    {
        path: "/favorites",
        Component: favorites
    },
    {
        path: "/randomDish",
        Component: randomDish
    },
    // {
    //     path: "/addCustomDish",
    //     Component: addCustomDish

    // }
]
