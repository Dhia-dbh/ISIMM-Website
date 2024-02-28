import { useState } from "react";
import "./Formation.css";
import NavBar2 from "../commun/navbar/NavBar2";
import Footer_1 from "../Footer_1/Footer_1";

function FormationMRGL(){
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
            <h1>DIPLÔME : MASTER DE RECHERCHE EN GÉNIE LOGICIEL</h1>
           <hr/>
           <h4>Description : </h4>
           
           <p className="txt">
           L'informatique est aujourd'hui devenue la colonne vertébrale de toute organisation quelle qu'elle soit. 
           Le métier d'informaticien est donc une pièce incontournable et stratégique de toute structure qui crée de l'information, mais également les outils de l'information. 
           Les informaticiens dotés d'un Master, de plus en plus spécialisé, sont ainsi très recherchés. Très ouvert, avec des débouchés nombreux et attractifs, ce métier aborde aussi bien l'informatique pure, que la cybersécurité, l'intelligence artificielle, Data Science, Bg Data, les systèmes embarqués ou les logiciels...
           </p>
           <br></br>
           <br/><br/>

<h5>PLAN D'ETUDE</h5>
          <button type="button" onClick={handleDownload} id="download"  class="btn btn-primary">Télécharger le plan d'etude</button>
            </div>
            <Footer_1></Footer_1>
        </div>
    )
}
export default FormationMRGL