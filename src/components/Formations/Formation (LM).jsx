import { useState } from "react";
import "./Formation.css";
import NavBar2 from "../commun/navbar/NavBar2";
import Footer_1 from "../Footer_1/Footer_1";

function FormationLM(){
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
            <h1>DIPLÔME : LICENCE MATHÉMATIQUES APPLIQUÉES</h1>
           <hr/>
           <h4>Description : </h4>
           
           <p className="txt">
           Contrairement aux idées reçues, la licence de mathématiques n’aboutit pas uniquement à l’enseignement ou à la recherche. 
           Les débouchés sont nombreux.
            Météorologie, finance, banque, assurance, médecine, biologie, fiabilité, transport… Vous n’imaginez pas tous les secteurs dans lesquels vous pourrez travailler en suivant des études de mathématiques ! Cependant, la Licence n’est généralement pas suffisante pour intégrer le marché du travail. 
            La majorité des postes à pourvoir exigent en effet un bac+5 minimum, les entreprises étant à la recherche de profils professionnalisés et rapidement opérationnels. 
            Après avoir acquis un socle de connaissances solides en mathématiques fondamentales et appliquées et en matières scientifiques plus générales, il est ainsi conseillé de vous spécialiser en Master.
           </p>
           <br/><br/>

<h5>PLAN D'ETUDE</h5>
          <button type="button" onClick={handleDownload} id="download"  class="btn btn-primary">Télécharger le plan d'etude</button>
            </div>
            <Footer_1></Footer_1>
        </div>
    )
}
export default FormationLM