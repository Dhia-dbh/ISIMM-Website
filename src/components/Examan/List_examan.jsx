import { useState } from 'react';
import "./List_examan.css"
import html2pdf from 'html2pdf.js';
import NavBar from '../commun/navbar/NavBar';
import NavBar2 from '../commun/navbar/NavBar2';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function List_examan()
{
    const [Examns,setExamns]=useState([{subject:"Algebre",Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},
    {subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},,{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},{subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"}] )
    const [isDs,setisDS]=useState(true)
    const [Semestre , setSemestre]=useState("Semestre 1")
    const [Nivaux,setNivau]=useState("CPI1")
    const generatePdf = () => {
        const element = document.getElementById('Tab');
          html2pdf(element);
        
      };
      const vieEstudiantineSubmenu = [
        { name: "Profile", path: "/etudiants/profile" },
        { name: "Cosulter Liste Etudiant", path: "/etudiants/etudiantListe" },
        { name: "Clubs", path: "/etudiants/clubs" },
        { name: "Emploi de Temps", path: "/etudiants/emploiDeTemps" },
      ];
      const navBarItems = [
        { name: "Notre Université", path: "/home" },
        { name: "Administration", path: "/administration" },
        { name: "Entreprise", path: "/entreprise" },
        {
          name: "Vie estudiantine",
          path: "/vie-estudiantine",
          submenu: vieEstudiantineSubmenu,
        },
        { name: "A propos", path: "/about" },
      ];
      const renderTableBody = () => {
        return (
          <tbody>
            {Examns.map((e, index) => (
              <tr key={index}>
                <th>{e.subject}</th>
                <td>{e.Date}</td>
                <td>{e.Time}</td>
                <td>{e.Salle}</td>
              </tr>
            ))}
          </tbody>
        );
      };

    return(
      <div id='Ex'>
      
      <NavBar2></NavBar2>
    <div id='pa'>
    {isDs ? (<h2>Calendrier des DS</h2>) : (<h2>Calendrier des Examens</h2>)}
    <h2>{Semestre}</h2>
    <h3>Nivau: {Nivaux}</h3>
    <div id='exam' > 
    <table id='Tab' border={1} class="examenTable">
    <thead>
    <tr class="table-primary" >
      <th scope="col" >matiere</th>
      <th scope="col" >Date</th>
      <th scope="col">Horaire</th>
      <th scope="col">Salle</th>
    </tr>
  </thead>
  {renderTableBody()}
</table>
</div>
    <div><button class="btn btn-dark" onClick={generatePdf}>Download</button></div>
    </div>
    
      <footer id='foot'>
      <p className='Ifoot'>Conception, réalisation :<br></br> Ing.Ahmed Chebbi<br></br> Ing.Dhia ben hammouda</p>
            <p  className='Ifoot'>Téléphone :+216 70 011 920 <br></br>Fax : +216 70 011 959</p>
            <p  className='Ifoot'>Adress:<br></br> Avenue de la Corniche, Monastir 5000 Tunisie</p>
            <p className='Ifoot'>Connect With Us <br/><FaGithub id='git' size={23} /> <FaFacebook id='facebook' size={23} /> <FaLinkedin id='linkedin' size={23}/></p>
            

      </footer>
    
    
    </div>)
}
export default List_examan