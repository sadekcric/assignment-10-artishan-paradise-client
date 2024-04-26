import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Layout/Router.jsx";
import CommonRoute from "./Layout/CommonRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CommonRoute>
      <RouterProvider router={router} />
    </CommonRoute>
  </React.StrictMode>
);
