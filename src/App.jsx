import { useState } from 'react'
import Login from './components/Login/login';
import Home from './components/home/home';
import Emploi_etudiant from './components/emploi_etudiant/emploi_etudiant';
import Profile_etudiant from './components/Profile_etudiant/Profile_etudiant';


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

export default App;
