import React, { useState } from "react";

import NavBar from "../commun/NavBar";
import NavBar2 from "../commun/NavBar2";

import "./home.css";
import isimm1 from "../../assets/isimm1.jpg";

const navBarItems = [
  { name: "Notre Université", path: "/home" },
  { name: "Administration", path: "/administration" },
  { name: "Entreprise", path: "/entreprise" },
  { name: "Vie estudiantine", path: "/vie-estudiantine" },
  { name: "A propos", path: "/about" },
];
const listGroupItems = [
  { name: "Etudiants", _id: "0" },
  { name: "Actualités", _id: "1" },
  { name: "Documents", _id: "2" },
  { name: "Lois", _id: "3" },
];

const Home = () => {
  const [selectedItem, setSelectedItem] = useState("Etudiants");
  return (
    <>
      <NavBar2 items={navBarItems} />
      <img src={isimm1} alt="Beautiful ISIMM" />
    </>
  );
};

export default Home;
