import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";

const router= createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {path:"",element:<Home/>},
            {path:"products",element:<Products/>},
            { path: "cart", element: <Cart /> },
            {path:"login",element:<Login/>},
            {path:"payment",element:<Payment/>},
            {path:"success",element:<OrderSuccess/>}
        ],

    },
]);

export default router;