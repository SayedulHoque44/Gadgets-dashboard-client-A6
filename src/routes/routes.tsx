import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GadgetsManagment from "../pages/GadgetsManagment/GadgetsManagment";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SalesHistory from "../pages/SalesHistory/SalesHistory";
import SalesManagement from "../pages/SalesManagement/SalesManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <App />,
    children: [
      {
        index: true,
        element: <GadgetsManagment />,
      },
      {
        path: "SalesManagement",
        element: <SalesManagement />,
      },
      {
        path: "SalesHistory",
        element: <SalesHistory />,
      },
    ],
  },
]);

export default router;
