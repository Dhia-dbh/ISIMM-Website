import { useEffect, useState } from "react";
import courses from "../../Data/classes.json";
import SelectItem from "./selectItem";
import "./emploi_etudiant.css";
import Session_item from "./session_item";
import html2pdf from "html2pdf.js";
import NavBar2 from "../commun/navbar/NavBar2";
import Footer1 from "../Footer_1/Footer_1";

function Emploi_etudiant() {
  //const [coursesData, setCoursesData] = useState([]);
  const [classe, setClasse] = useState("");
  const [filiere, setFiliere] = useState("");
  const [TD, setTD] = useState("NONE");
  const generatePdf = () => {
    const element = document.getElementById("Tab");
    html2pdf(element);
  };
  let tab;
  if (TD === "NONE") {
    tab = (
      <table className="table table-striped" border={1}>
        <thead>
          <tr>
            <th>Horaire</th>
            <th>8:30_10:00</th>
            <th>10:15_11:45</th>
            <th>12:00_13:00</th>
            <th>13:00_14:30</th>
            <th>14:45_16:15</th>
            <th>16:30_18:00</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lundi</td>
            <td id="Lundi1"></td>
            <td id="Lundi2"></td>
            <td id="Lundi3"></td>
            <td id="Lundi4"></td>
            <td id="Lundi5"></td>
            <td id="Lundi6"></td>
          </tr>
          <tr>
            <td>Mardi</td>
            <td id="Mardi1"></td>
            <td id="Mardi2"></td>
            <td id="Mardi3"></td>
            <td id="Mardi4"></td>
            <td id="Mardi5"></td>
            <td id="Mardi6"></td>
          </tr>
          <tr>
            <td>Mercredi</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Jeudi</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Vendredi</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Samedi</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    tab = (
      <table class="table table-striped" border={1}>
        <thead>
          <tr>
            <th>Horaire</th>
            <th>8:30_10:00</th>
            <th>10:15_11:45</th>
            <th>12:00_13:00</th>
            <th>13:00_14:30</th>
            <th>14:45_16:15</th>
            <th>16:30_18:00</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lundi</td>
            <td id="Lundi1">
              <Session_item />
            </td>
            <td id="Lundi2">
              <Session_item />
            </td>
            <td id="Lundi3"></td>
            <td id="Lundi4">
              <Session_item />
            </td>
            <td id="Lundi5">
              <Session_item />
            </td>
            <td id="Lundi6">
              <Session_item />
            </td>
          </tr>
          <tr>
            <td>Mardi</td>
            <td id="Mardi1">
              <Session_item />
            </td>
            <td id="Mardi2">
              <Session_item />
            </td>
            <td id="Mardi3"></td>
            <td id="Mardi4">
              <Session_item />
            </td>
            <td id="Mardi5">
              <Session_item />
            </td>
            <td id="Mardi6">
              <Session_item />
            </td>
          </tr>
          <tr>
            <td>Mercredi</td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
            <td></td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
          </tr>
          <tr>
            <td>Jeudi</td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
            <td></td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
          </tr>
          <tr>
            <td>Vendredi</td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
            <td></td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
          </tr>
          <tr>
            <td>Samedi</td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
            <td></td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  const handleClasseChange = (e) => {
    setClasse(e.target.value);
    setFiliere("");
    setTD("");
  };
  const handleFiliereChange = (e) => {
    setFiliere(e.target.value);
    setTD("");
  };
  const handleTDChange = (e) => {
    setTD(e.target.value);
  };
  return (
    <div id="B">
      <NavBar2></NavBar2>
      <div id="tablee">
        <div id="title">
          <p id="uni">
            Université supérieur d'informatique et du mathématique de Monastir
          </p>
          <p id="class">
            Groupe TD : {TD} <br />
            <p id="date">(à partir de 01/09/2024)</p>
          </p>
        </div>
        <div id="classeSelect" className="selectEmploi">
          <p>Choisir votre Classe</p>

          <SelectItem
            items={courses["Courses"]}
            value={classe}
            onChange={handleClasseChange}
          />
        </div>
        {classe !== "" ? (
          <div id="filiere" className="selectEmploi">
            <p>Choisir votre Filière</p>
            <SelectItem
              items={courses["Courses"][classe]}
              value={filiere}
              onChange={handleFiliereChange}
            />
          </div>
        ) : null}
        {filiere !== "" ? (
          <div id="TD" className="selectEmploi">
            <p>Choisir votre Groupe TD:</p>
            <SelectItem
              items={courses["Courses"][classe][filiere]}
              value={TD}
              onChange={handleTDChange}
            />
          </div>
        ) : null}

        <div id="table">
          {tab}
          <button class="btn btn-primary" onClick={generatePdf()}>
            Imprimer
          </button>
        </div>
      </div>

      <Footer1 />
    </div>
  );
}
export default Emploi_etudiant;
