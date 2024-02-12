import { useState } from "react";
import "./Formation.css";
import NavBar2 from "../commun/navbar/NavBar2";
import Footer_1 from "../Footer_1/Footer_1";
function FormationMRMI(){
    const [Formation,setFormation]=useState("./Ingénieurie Informatique.pdf")
    const handleComboBoxChange = (event) => {
        const selectedOption = event.target.value;
        setFormation(selectedOption);
        console.log(Formation)
      };
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
            <h1>DIPLÔME :  MASTER DE RECHERCHE EN MICROÉLECTRONIQUE ET INSTRUMENTATION</h1>
           <hr/>
           <h4>Description : </h4>
           <h5>Objectif général :</h5>
           <p className="txt">L’objectif général de la formation en mastère de recherche en microélectronique et instrumentation vise à former des compétences qui disposent de toute l’expertise et le savoir-faire en matière de la microélectronique ainsi que l’instrumentation associée (microsystèmes, systèmes embarqués, micro-capteurs,...). En plus, ce master assure une meilleure formation pour les futurs doctorants.</p>
           <h5>Objectifs spécifiques :</h5>
           <p className="txt">
<ul>
  <li>Maîtriser un savoir-faire en conception, fabrication microélectronique et caractérisation physique/électrique de dispositifs microélectroniques et de microsystèmes</li>
  <li>Gérer et exécuter un programme de recherche dans le domaine de la microélectronique</li>
  <li>Concevoir et développer des solutions innovantes  aussi bien pour la recherche fondamentale que pour des applications technologiques dans le secteur publique ou privé</li>
  <li>Avoir des compétences solides sur les systèmes électroniques</li>
  <li> Développer les capacités d’organisation et de travail en projet</li>
  <li>Appréhender un système industriel complexe sous diverses facettes - matérielles et logicielles</li>
</ul></p>

          <h5>Acquis d’apprentissages (Learning Outcomes)</h5>
          <p className="pro">
          A la fin de la formation, les participants doivent être capables de :
<ol>
    <li>Connaissances (savoir) :
    <ul>
        <li>Acquérir des notions de bases concernant les composants à semi-conducteurs</li>
        <li>Maîtriser les fondements physiques des composants électroniques et optoélectroniques</li>
        <li>Comprendre les fondements théoriques des micro-capteurs et des microsystèmes</li>
        <li>Maitriser les systèmes électroniques analogiques et numériques</li>
        <li>Maîtriser les étapes d’implémentation matérielle et logicielle d’un système électronique  </li>
    </ul>
    </li>
    <li>Aptitudes (savoir-faire) :
    <ul>
        <li>Savoir exploiter les cadres théoriques et prendre du recul dans les expériences</li>
        <li>Programmer dans un langage informatique spécifique (programmation OO pour l’électronique)</li>
        <li>Concevoir des systèmes sur puces</li>
        <li>Concevoir des circuits intégrés</li>
        <li>Savoir caractériser des composants électroniques et des microsystèmes</li>
    </ul>
    </li>
    <li>Attitudes (savoir-être) :
    <ul>
        <li>Prendre systématiquement des initiatives pour réaliser des idées créatives</li>
        <li> Prendre systématiquement des initiatives pour réaliser ses idées créatives</li>
        <li>Démontrer une capacité à travailler à la fois individuellement  et savoir s’intégrer dans des équipes pluridisciplinaires composées de compétences différentes, mais complémentaires.</li>
        <li>Savoir étudier et mettre en place les meilleures solutions techniques</li>
    </ul>
    </li>
</ol>
</p>   
<h5>Perspectives académiques </h5>
<p className="txt">
<ul>
  <li>Poursuite des études en thèse de Doctorat.</li>
  <li>Intégrer une société travaillant dans le domaine de la microélectronique</li>
</ul>
</p>
<h5>PLAN D'ETUDE</h5>
          <button type="button" onClick={handleDownload} id="download"  class="btn btn-primary">Télécharger le plan d'etude</button>
            </div>
            <Footer_1></Footer_1>
        </div>
    )
}
export default FormationMRMI