import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import NotFound from "./components/commun/not-found";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
  const styles = {
    //color: "green",
    borderWidth: 1,
    borderStyle: "solid",
  };
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
