import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { PiMagnifyingGlassBold } from "react-icons/pi";

import "./EtudiantListe.css";

const EtudiantListe = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic here
    // You can use an API call or search through a local data source

    // For demonstration purposes, let's assume we have a list of people

    const filteredResults = people.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  };
  const people = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="container ">
      <form>
        <div className="searchBox">
          <input
            type="text"
            className="searchBar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch} className="inputIcon">
            <PiMagnifyingGlassBold />
          </button>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>

      <section className="searchResults">
        <ul className="list-group">
          {searchResults.map((person) => (
            <li key={person.id} className="list-group-item">
              <a href={"/etudiants/profile/" + person.id}>{person.name}</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default EtudiantListe;
