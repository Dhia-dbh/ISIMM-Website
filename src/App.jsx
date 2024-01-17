import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/Login/login";
import NotFound from "./components/commun/not-found";
import EtudiantListe from "./components/EtudiantListe";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"/home"} />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/etudiants/etudiantListe",
      element: <EtudiantListe />,
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
