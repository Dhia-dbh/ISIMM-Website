import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/Login/login";
import NotFound from "./components/commun/not-found";
import EtudiantListe from "./components/EtudiantListe/EtudiantListe";
import Emploi_etudiant from "./components/emploi_etudiant/emploi_etudiant";
import Profile_etudiant from "./components/Profile_etudiant/Profile_etudiant";
import List_examan from "./components/Examan/List_examan";
import Note_Tab from "./components/Notes/Note_Tab";
import Notes from "./components/Notes/Notes";
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
      path: "/etudiants/emploiDeTemps",
      element: <Emploi_etudiant />,
    },
    {
      path: "/etudiants/examens",
      element: <List_examan />,
    },
    {
      path: "/etudiants/profile",
      element: <Profile_etudiant />,
    },
    {
      path: "/etudiants/notes",
      element: <Note_Tab />,
    },
    {
      path: "/etudiants/notes2",
      element: <Notes />,
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
//<RouterProvider router={router} />
export default App;
