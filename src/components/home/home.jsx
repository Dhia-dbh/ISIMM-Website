import React, { useState } from "react";

import NavBar from "../commun/NavBar";

import "./home.css";
import ListGroup from "./../commun/listGroup";

const navBarItems = [
  { name: "Etudiants", path: "/etudiant" },
  { name: "Enseignants", path: "/enseignant" },
  { name: "Administration", path: "/adminstration" },
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
      <header>
        <NavBar
          title="Home"
          itemsLeft={navBarItems}
          itemsRight={[{ name: "A props", path: "/apropos" }]}
        />
      </header>
      <main>
        <ListGroup
          items={listGroupItems}
          selectedItem={selectedItem}
          onItemSelect={(item) => setSelectedItem(item.name)}
        />
      </main>
    </>
  );
};

export default Home;
