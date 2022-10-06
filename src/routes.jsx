import { Navigate, useRoutes } from "react-router-dom";
import HomeLayout from "./layouts/home";
import Home from "./pages/Home";

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
  ]);
}
