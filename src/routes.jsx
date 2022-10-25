import { Navigate, useRoutes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomeLayout from "./layouts/home";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Cart from "./pages/Cart";
import AuthLayout from "./layouts/auth";
import Payment from "./pages/Payment";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/auth",
      element: <Navigate to="/auth/signin" replace />,
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "signin", element: <SignIn /> },
        { path: "signup", element: <SignUp /> },
      ],
    },
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "product-details", element: <ProductDetails /> },
        { path: "cart", element: <Cart /> },
        { path: "payment", element: <Payment /> },
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
