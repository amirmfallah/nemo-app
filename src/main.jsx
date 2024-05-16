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
import Profile from "./pages/Profile/index.jsx";
import Splash from "./pages/Splash.jsx";
import AddPet from "./pages/AddPet/AddPet.jsx";
import Chat from "./pages/Chat.jsx";
import Order from "./pages/Order.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "explore",
        children: [
          {
            path: "",
            element: <Explore />,
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
        path: "chat",
        element: <Chat />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/order",
        element: <Order />,
      },
      {
        path: "boarding/:step?",
        element: <AddPet />,
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
  {
    path: "splash",
    element: <Splash />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
