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
import Dashboard from "./views/seller/Dashboard";
import Products from "./views/seller/products/ProductLists";
import ProductLists from "./views/seller/products/ProductLists";
import AddProduct from "./views/seller/products/AddProduct";

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
    element: <SellerLayout />,
    children: [
      {
        path: "/seller/dashboard",
        element: <Dashboard />
      },
      {
        path: "/seller/product/lists",
        element: <ProductLists />
      },
      {
        path: "/seller/product/add",
        element: <AddProduct />
      }
    ]
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
