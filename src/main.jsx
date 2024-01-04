import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root.jsx";
import Details from "./pages/Details.jsx";
import Report from "./pages/Report.jsx";
import Login from "./pages/Login.jsx";
import Verify from "./pages/Verify.jsx";
import Explore from "./layout/Explore.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "detail",
            element: <Details />,
          },
        ],
      },
      {
        path: "report",
        element: <Report />,
      },
      {
        path: "map",
        element: <Explore />,
      },
    ],
  },
  {
    path: "auth/login",
    element: <Login />,
  },
  {
    path: "auth/verify",
    element: <Verify />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
