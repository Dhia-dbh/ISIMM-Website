import React, { useState } from "react";

const handleSearch = () => {
  // Perform search logic here
  // You can use an API call or search through a local data source

  // For demonstration purposes, let's assume we have a list of people
  const people = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" },
  ];

  const filteredResults = people.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  setSearchResults(filteredResults);
};
const EtudiantListe = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default EtudiantListe;
