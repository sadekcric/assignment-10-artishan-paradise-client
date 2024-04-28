import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import AllArtAndCraft from "../Pages/AllArtAndCraft/AllArtAndCraft";
import MyArt from "../Pages/MyArt/MyArt";
import Profile from "../Pages/Profile/Profile";
import Details from "../Pages/Home/Details";
import Privacy from "../Pages/Privacy/Privacy";
import TermsAndCon from "../Pages/Terms&Condition/TermsAndCon";
import Update from "../Pages/MyArt/Update";
import Error from "../Pages/Error/Error";
import CategoryCart from "../Pages/Home/categories/CategoryCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allArt",
        element: <AllArtAndCraft />,
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "myArt",
        element: (
          <PrivateRoute>
            <MyArt />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://artisan-paradise-server.vercel.app/products/${params.id}`),
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "terms",
        element: <TermsAndCon />,
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://artisan-paradise-server.vercel.app/products/${params.id}`),
      },
      {
        path: "categoryCart",
        element: <CategoryCart />,
      },
    ],
  },
]);

export default router;
