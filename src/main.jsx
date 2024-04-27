import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Layout/Router.jsx";
import CommonRoute from "./Layout/CommonRoute.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <CommonRoute>
        <RouterProvider router={router} />
      </CommonRoute>
    </HelmetProvider>
  </React.StrictMode>
);
