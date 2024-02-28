import { useState } from "react";
import "./Formation.css";
import NavBar2 from "../commun/navbar/NavBar2";
import Footer_1 from "../Footer_1/Footer_1";
import LOGO from "../../assets/logo.png"
import Math from "../../assets/Math.jpg"
import Tech from "../../assets/tech.jpg"
import Info from "../../assets/informatique.jpeg"
function FormationMIM(){
    const [Formation,setFormation]=useState("./Ingénieurie Informatique.pdf")
      const handleDownload = () => {
    // Replace 'your-file-url' with the actual URL of the file you want to download
    const fileUrl = Formation;

    // Create a hidden link element
    const link = document.createElement('a');
    link.href = fileUrl;

    // Specify the filename for the downloaded file
    link.download = Formation;

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click event on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
      };
        return(
        <div className="page"> 
        <div style={{ position: 'fixed', width: '100%', zIndex: 2 }}>
            <NavBar2></NavBar2></div>  
            <div className="bgF">
            <h1>DIPLÔME : LICENCE EEA - PARCOURS: MESURE INSTRUMENTATION ET MÉTROLOGIE (MIM)</h1>
           <hr/>
           <h4>Description : </h4>
           <h5>OBJECTIFS DE LA FORMATION :</h5>
           <p className="txt">Ce parcours forme des professionnels de l’instrumentation dans des domaines liés à la métrologie et les mesures : environnementales, biologiques, industrielles, médicales… L’objectif de cette formation est de former des professionnels capables de contrôler les instruments industriels (étalonnages, normes...) pour garantir une production industrielle de qualité.

Au terme de cette formation, les diplômés auront acquis les connaissances scientifiques et organisationnelles nécessaires à l’entreprise engagée dans une démarche métrologique et sont capables :
<ul>
  <li>d’analyser les besoins métrologiques et les documents réglementaires, techniques et normatifs</li>
  <li>de définir les procédures d’étalonnage des instruments de mesure</li>
  <li>de caractériser, de valider et d’estimer une incertitude</li>
  <li>de gérer les parcs d’instrumentation</li>
</ul></p>

          <h5>DEBOUCHES PROFESSIONNELS</h5>
          <p className="pro">
          Métiers visés :
          <ul>
            <li>Technicien supérieur en mesures et instrumentation</li>
            <li>Technicien supérieur en qualification et métrologie industrielle</li>
            <li>Responsable d’un parc d’instrumentation</li>
            <li>Technicien référent en laboratoire d’analyse et de certification</li>
          </ul></p>   
<h5>POURSUITE DES ETUDES</h5>
<p className="txt">À celles et ceux qui veulent continuer encore 2 ans, il existe de nombreux masters au sein de l’ISIMM, parmi lesquels :
<ul>
  <li>Master professionnel en Ingénierie en Instrumentation Industrielle (3I)</li>
  <li>Master de recherche en Microélectronique & Instrumentation.</li>
</ul>
</p>
<h5>PLAN D'ETUDE</h5>
          <button type="button" onClick={handleDownload} id="download"  class="btn btn-primary">Télécharger le plan d'etude</button>
            </div>
            <Footer_1></Footer_1>
        </div>
    )
}
export default FormationMIM