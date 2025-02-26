import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Public from "./components/Public/Public";
import PrivatePage from "./components/PrivatePage/PrivatePage";

const Human = ({ children }) => {
  const authenticated = useSelector((state) => state.auth.isAuthenticated);
  return authenticated ? children : <Navigate to="/" />;
};

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Public />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/private",
      element: (
        <Human>
          <PrivatePage />
        </Human>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
