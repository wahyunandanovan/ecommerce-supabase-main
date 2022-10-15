import { Navigate, useRoutes } from "react-router-dom";
import HomeLayout from "./layouts/home";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Cart from "./pages/Cart";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "product-details", element: <ProductDetails /> },
        { path: "cart", element: <Cart /> },
      ],
    },
    {
      path: "/404",
      element: <Page404 />,
    },

    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
