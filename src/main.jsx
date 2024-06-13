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
      }
    ],
  },
  {
    path: "seller",
    element: <SellerLayout />,
  },
  {
    path: "/accounts",
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
