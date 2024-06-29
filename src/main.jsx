import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SellerLayout from "./components/layouts/SellerLayout";
import "./tailwind.css";
import AuthLayout from "./components/layouts/AuthLayout";
import Signin from "./views/accounts/Signin";
import Login from "./views/accounts/Login";
import Home from "./views/Home";
import UserLayout from "./components/layouts/UserLayout";
import Show from "./views/Show";
import Search from "./views/Search";
import Checkout from "./views/Checkout";
import Payment from "./views/Payment";

const router = createBrowserRouter([
  {
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:seller/:product",
        element: <Show />
      },
      {
        path : "/search",
        element : <Search />
      },
      {
        path : "/checkout/:product",
        element: <Checkout />
      },
      {
        path : "/payment",
        element: <Payment />
      }
    ],
  },
  {
    path: "seller",
    element: <SellerLayout />,
  },
  {
    path: "/users",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
