import { useState } from 'react';
import "./Emploi_enseignant.css"
import NavBar2 from '../commun/navbar/NavBar2';
import Footer_1 from '../Footer_1/Footer_1';
import html2pdf from 'html2pdf.js';
import Session_item1 from './session_item1';

function Emploi_enseignat() {

    const [TD, setTD] = useState('NONE');

  const handleComboBoxChange = (event) => {
    const selectedOption = event.target.value;
    setTD(selectedOption);
    console.log(TD)
  };
  const generatePdf = () => {
    const element = document.getElementById('Tab');
      html2pdf(element);
    
  };

  let tab 
  if (TD==="NONE"){
    tab=      
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
         <td id="Lundi1" ></td>
         <td id="Lundi2" ></td>
         <td id="Lundi3"></td>
         <td id="Lundi4" ></td>
         <td id="Lundi5" ></td>
         <td id="Lundi6" ></td>
         
       </tr>
       <tr>
         <td>Mardi</td>
         <td id="Mardi1" ></td>
         <td id="Mardi2" ></td>
         <td id="Mardi3" ></td>
         <td id="Mardi4" ></td>
         <td id="Mardi5" ></td>
         <td id="Mardi6" ></td>
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
  }
  else
  {
         tab= 
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
       <td id="Lundi1" ></td>
       <td id="Lundi2" ></td>
       <td id="Lundi3"></td>
       <td id="Lundi4" ></td>
       <td id="Lundi5" ></td>
       <td id="Lundi6" ></td>
       
     </tr>
     <tr>
       <td>Mardi</td>
       <td id="Mardi1" ><Session_item1/></td>
       <td id="Mardi2" ><Session_item1/></td>
       <td id="Mardi3" ></td>
       <td id="Mardi4" ><Session_item1/></td>
       <td id="Mardi5" ></td>
       <td id="Mardi6" ></td>
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
  }
    return(
      <div id="B">
      <NavBar2></NavBar2>
        <div id='tablee'>
        <div id="title">
            <p id="uni">Université supérieur d'informatique et du mathématique de Monastir</p>
            <p id="date">(à partir de 01/09/2024)</p>
            
        </div>
<div id="TD">
<p>Choisir votre Groupe TD:</p>
          <select className="form-select" id="nivaux"   onChange={handleComboBoxChange}>
          <option value="NONE">Choisir</option>
          <option value="Lazher Hamel">Lazher Hamel</option>
          <option value="Mohamed Graiet">Mohamed Graiet</option>
          
          </select>
          
</div>


        <div id="table">
        
        {tab}
        <button class="btn btn-primary" onClick={generatePdf()}>Imprimer</button>
  
</div>
        </div>
        
        <Footer_1></Footer_1>
        </div>
    )
}
export default Emploi_enseignat