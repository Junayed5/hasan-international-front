import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main/Main";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import SingIn from "../Components/SignIn/SignIn";
import P404 from "../Pages/P404";
import Contact from "../Pages/Contact/Contact";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import About from "../Pages/About/About";
import Product from "../Pages/Product/product";
import Registration from "../Components/Registration";
import MyCarts from "../Pages/About/MyCarts";
import ResetPassword from "../Components/ResetPassword";
import DashboardLayout from "../Layout/Dashboard/Dashboard";
import AllUsers from "../Components/deshbord/AllUsers";
import DashboardHome from "../Layout/Dashboard/DashboardHome";
import PrivateRoute from "./PrivateRoute";
import ProductForm from "../Layout/Dashboard/ProductForm";
import CheckoutPay from "../Pages/About/CheckoutPay";
import AllProducts from "../Layout/Dashboard/AllProducts";
import UpdateForm from "../Layout/Dashboard/UpdateForm";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/sing-in",
        element: <SingIn />,
      },
      {
        path: "/sing-up",
        element: <Registration />,
      },
      {
        path: "/single-product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/my-carts",
        element: <MyCarts />,
      },
      {
        path: "/shipping-checkout",
        element: <CheckoutPay />,
      },

      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "*",
        element: <P404 />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute>
      <DashboardLayout />
    </PrivateRoute>
    ,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/users",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/product-add",
        element: <ProductForm/>,
      },
      {
        path: "/dashboard/all-products",
        element: <AllProducts/>,
      },
      {
        path: "/dashboard/update-product/:id",
        element: <UpdateForm/>,
      },
    ]
  },
]);

export default routes;
