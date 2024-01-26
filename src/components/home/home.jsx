import React, { useState } from "react";

import NavBar from "../commun/navbar/NavBar";

import "./home.css";

import isimm1 from "../../assets/isimm1.jpg";

const vieEstudiantineSubmenu = [
  { name: "Profile", path: "/etudiants/profile" },
  { name: "Cosulter Calendrier Examen", path: "/etudiants/examens" },
  { name: "Cosulter Notes ", path: "/etudiants/notes" },
  { name: "Cosulter Liste Etudiant", path: "/etudiants/etudiantListe" },
  { name: "Clubs", path: "/etudiants/clubs" },
  { name: "Emploi de Temps", path: "/etudiants/emploiDeTemps" },
];

const navBarItems = [
  { name: "Notre Université", path: "/home" },
  { name: "Actuailités", path: "/actualites" },
  { name: "Administration", path: "/administration" },
  { name: "Entreprise", path: "/entreprise" },
  {
    name: "Vie estudiantine",
    path: "/vie-estudiantine",
    submenu: vieEstudiantineSubmenu,
  },
  { name: "A propos", path: "/about" },
];
const listGroupItems = [
  { name: "Etudiants", _id: "0" },
  { name: "Actualités", _id: "1" },
  { name: "Documents", _id: "2" },
  { name: "Lois", _id: "3" },
];
const actualiteItems = [
  {
    title: "Notes",
    description: "Consulter vos notes",
    keywords: "etudiant note",
  },
  {
    title: "Calendrier Examen",
    description: "Consulter calendrier Examen",
    keywords: "etudiant examen",
  },
  {
    title: "Paiement Tranche Trimestre 2",
    description:
      "Veuillez payer la deuxieme tranche de l'anneé universitaire 2023-2024",
    keywords: "etudiant paiement",
  },
];

const Home = () => {
  return (
    <>
      <NavBar items={navBarItems} />
      <img src={isimm1} alt="Beautiful ISIMM" />
      <section style={{ minHeight: "100px" }}>
        <h2 className="title mt-5 mb-5">Actualité</h2>
        <div className="actualiteHolder">
          {actualiteItems.map((item, index) => (
            <div key={index} className="actualiteItem">
              <h4>{item.title}</h4>
              <div className="actualiteDescription">
                <p>{item.description} lorem</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
