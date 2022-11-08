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
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Account from "./pages/account";
import VerifyEmail from "./pages/VerifyEmail";
import AdminDashboard from "./layouts/admin";
import Admin from "./pages/admin";

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
        { path: "order", element: <Order /> },
        { path: "contact", element: <Contact /> },
        { path: "product", element: <Product /> },
        { path: "account", element: <Account /> },
      ],
    },
    {
      path: "/admin",
      element: <Navigate to="/admin/home" replace />,
    },
    {
      path: "/admin",
      element: <AdminDashboard />,
      children: [{ path: "home", element: <Admin /> }],
    },
    {
      path: "/email-verifycation",
      element: <VerifyEmail />,
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
