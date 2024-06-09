import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLayout from "./components/layouts/RootLayout";
import SellerLayout from "./components/layouts/SellerLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import Signin from "./views/accounts/Signin";
import Login from "./views/accounts/Login";
import Home from "./views/Home";
import UserLayout from "./components/layouts/UserLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <UserLayout />, 
        children: [
          {
            path: "/",
            element : <Home />
          }
        ]
      },
      {
        path: "seller",
        element: <SellerLayout />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/accounts/signin",
            element: <Signin />,
          },
          {
            path: "/accounts/login",
            element: <Login />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
