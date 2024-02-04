import { useState } from 'react';
import "./Entreprise.css"
import NavBar from '../commun/navbar/NavBar';
import NavBar2 from '../commun/navbar/NavBar2';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { render } from 'react-dom';
import Footer_1 from '../Footer_1/Footer_1';

function Entreprise() {
    const [Offres, setOffres] = useState([
        { Nom_Entreprise: "Microsoft", Date: "12/10/2023", Titre: "Junior python dev",  Link: "google.com" },
         { Nom_Entreprise: "Ubisoft", Date: "20/12/2023", Titre: "C# dev",  Link: "google.com" }, 
         { Nom_Entreprise: "Roit Games", Date: "5/1/2024", Titre: "C++ dev",  Link: "google.com" }, 
         { Nom_Entreprise: "Tesla", Date: "12/10/2023", Titre: "junior electronic engineer",  Link: "google.com" },
         { Nom_Entreprise: "Aiza", Date: "12/10/2023", Titre: "Junior Data scientist",  Link: "google.com" },
         { Nom_Entreprise: "Oracle", Date: "12/10/2023", Titre: "Junior Java dev",  Link: "google.com" },
         { Nom_Entreprise: "Ministère de lʼEnseignement supérieur, de la Recherche et de lʼInnovation", Date: "04/02/2023", Titre: "web developper",  Link: "google.com" },
    ]);
    const stages = () => {
        return (
            <div className='BigDiv'><h1>Offres d'emploi</h1>
            <div className="offre">
            
                {Offres.length === 0 ? (
                    <div className='unavailavble'>
                    <h1 >No Available internship at the moment</h1>
                    </div>
                ) : (
                    Offres.map((e, index) => (
                        <div className='element' key={index}>
                            <div>
                                <h4>{e.Titre}</h4>
                                <p>{e.Nom_Entreprise}</p>
                            </div>
                            <div>
                                {e.Date}
                            </div>
                            <div>
                                {e.Description}
                                <a href='https://www.facebook.com/'>See More</a>
                            </div>
                        </div>
                    ))
                )}
            </div></div>
        );
    }
    

    return (
        <div className='page'>
            <NavBar2/> 
            
            {stages()} {/* Call the function to render its content */}
            <Footer_1></Footer_1>
        </div>
    );
}

export default Entreprise;
