import { useState } from 'react';
import "./List_examan.css"
import html2pdf from 'html2pdf.js';
import NavBar from '../commun/navbar/NavBar';
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
      const render = () => {
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
      <div>
      <div id='Nav'> <NavBar  items={navBarItems}/></div>
     
    <div id='page'>
    {isDs ? (<h2>Calendrier des DS</h2>) : (<h2>Calendrier des Examens</h2>)}
    <h2>{Semestre}</h2>
    <h3>Nivau: {Nivaux}</h3>
    <div id='exam' > 
    <table id='Tab' border={1} class="table">
    <thead>
    <tr class="table-primary" >
      <th scope="col" >matiere</th>
      <th scope="col" >Date</th>
      <th scope="col">Horaire</th>
      <th scope="col">Salle</th>
    </tr>
  </thead>
  {render()}
</table>
</div>
    <div><button class="btn btn-dark" onClick={generatePdf}>Download</button></div>
    </div>
    
      <footer id='foot'>

        <p id='pfooter'>copyright &copy; President & Fellows of ISIMM College   
        <br/><a className='Link' href='#'> contact Us</a> 
        <br/><a className='Link' href='#'> Course Policies and Discounts</a> 
        <br/><a className='Link' href='#'>Privacy Policy</a> 
        <br/></p>

      </footer>
    
    
    </div>)
}
export default List_examan