import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Checkout from "../pages/Checkout/Checkout";
import GadgetsManagment from "../pages/GadgetsManagment/GadgetsManagment";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SalesHistory from "../pages/SalesHistory/SalesHistory";
import SalesManagement from "../pages/SalesManagement/SalesManagement";
import SucessCartPage from "../pages/SuccessCartPage/SucessCartPage";

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
      {
        path: "Checkout",
        element: <Checkout />,
      },
      {
        path: "SuccessCartPage",
        element: <SucessCartPage />,
      },
    ],
  },
]);

export default router;
