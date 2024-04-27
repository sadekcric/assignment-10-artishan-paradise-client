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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        element: <MyArt />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "/details/:id",
        element: <Details />,
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
        element: <Update />,
        loader: ({ params }) => fetch(`https://artisan-paradise-server.vercel.app/products/${params.id}`),
      },
    ],
  },
]);

export default router;
