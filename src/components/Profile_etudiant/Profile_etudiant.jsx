import { useState } from "react";
import "./Profile_etudiant.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer_1 from "../Footer_1/Footer_1";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import isimm1 from "../../assets/pfp.jpg";
import NavBar2 from "../commun/navbar/NavBar2";
import { BrowserRouter } from "react-router-dom";
function Profile_etudiant() {
  const [Nom, setNom] = useState("Ahmed");
  const [Prenom, setPrenom] = useState("Chebbi");
  const [Nivau, setNivau] = useState("Ing1");
  const [GrpTD, setGrpTD] = useState("TD1");

  const Contact = () => {
    alert("Email : achebbi2002@gmail.com\n num de telph: 58660875 ");
  };
  const GoToGrades = () => {};
  return (
    <div id="Page">
      <NavBar2></NavBar2>
      <div id="Header">
        <div id="pfp">
          <img
            src={isimm1}
            alt="ISIMM"
            width="150"
            height="150"
            id="photo_profile"
          ></img>
        </div>
        <div id="Nom-Prenom">
          <label>Nom :{Nom}</label>
          <br />
          <label>Prenom :{Prenom}</label>
        </div>
        <div id="Nivau">
          <label>Nivaux d'etude :{Nivau}</label>
          <br />
          <label>Groupe TD :{GrpTD}</label>
        </div>
        <div id="Contact">
          <button
            type="button"
            id="but"
            onClick={Contact}
            class="btn btn-primary"
          >
            Contact
          </button>
          <button
            type="button"
            id="but"
            onClick={Contact}
            class="btn btn-primary"
          >
            Modifier
          </button>
        </div>
      </div>
      <div id="sep"></div>
      <div id="Information">
        <div id="Grades">
          <h3>Grades</h3>
          <table>
            <tr>
              <td>
                <h6>Semestre 1 :</h6>
              </td>
              <td>
                <a href="/etudiants/notes">
                  <button class="btn btn-success" onClick={GoToGrades}>
                    View Results
                  </button>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <h6>Semestre 2 :</h6>
              </td>
              <td>
                <p>Non Disponible ...</p>
              </td>
            </tr>
            <tr>
              <td>
                <h6>Session principale :</h6>
              </td>
              <td>Non Disponible ...</td>
            </tr>
            <tr>
              <td>
                <h6>Session Controle :</h6>
              </td>
              <td>Non Disponible ...</td>
            </tr>
          </table>
        </div>
        <div id="Associative">
          <h3>Vie Associative</h3>
          <table>
            <tr>
              <td>
                <h6>Clubs :</h6>
              </td>
              <td>
                <p>CPU , IEEE</p>
              </td>
            </tr>
            <tr>
              <td>
                <FaLinkedin size={32} />
              </td>
              <td>
                <a
                  id="Link"
                  href="https://www.linkedin.com/in/ahmed-chebbi-69339319b/"
                >
                  Ahmed Chebbi
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <FaGithub size={32} />
              </td>
              <td>
                <a id="Link" href="https://github.com/Ahmed5827">
                  Ahmed5827
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <Footer_1 />
    </div>
  );
}
export default Profile_etudiant;
