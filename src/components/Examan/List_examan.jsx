import { useState } from 'react';
import "./List_examan.css"
import html2pdf from 'html2pdf.js';

function List_examan()
{
    const [Examns,setExamns]=useState([{subject:"Algebre",Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"},
    {subject:"Algebre" ,Date:"12/10/2023" ,Time:"10:00-12:00",	Salle:"C-01"}] )
    const [isDs,setisDS]=useState(true)
    const [Semestre , setSemestre]=useState("Semestre 1")
    const [Nivaux,setNivau]=useState("CPI1")
    const generatePdf = () => {
        const element = document.getElementById('page');
          html2pdf(element);
        
      };
    const render =() =>{
        return(
        Examns.map((e, index) => (

            <div className='Exam3' key={index}>
            <h3>matiere: {e.subject}</h3>
            <h4>Horaire: {e.Time}</h4>
            <h4>Date: {e.Date}</h4>
            <h4>Salle: {e.Salle}</h4>
            </div>)

            
            )

    
    )}

    return(
    <div id='page'>
{isDs ? (<h2>Calendrier des DS</h2>) : (<h2>Calendrier des Examens</h2>)}
<h2>{Semestre}</h2>
<h3>Nivau: {Nivaux}</h3>
    <div id='exam' >{render()}</div>
    <div><button class="btn btn-primary" onClick={generatePdf}>Download</button></div>
    </div>)
}
export default List_examan