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
import Emploi_etudiant from "./components/emploi_etudiant/emploi_etudiant";
import Profile_etudiant from "./components/Profile_etudiant/Profile_etudiant";
import "./App.css";
import Note_Tab from  "./components/Notes/Note_Tab";
import Register from "./components/register/register";
import List_exama from "./components/Examan/List_examan";
import List_examan from "./components/Examan/List_examan";

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
      path: "/etudiants/profile/Notes",
      element: <Note_Tab/> ,
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
      path: "/etudiants/profile",
      element: <Profile_etudiant />,
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
    
    <Profile_etudiant></Profile_etudiant>
     
    </>
  );
}
//<RouterProvider router={router} />
export default App;
