import { Navigate, useRoutes } from "react-router-dom";
import HomeLayout from "./layouts/home";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/",
      element: <HomeLayout />,
      children: [{ path: "home", element: <Home /> }],
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
