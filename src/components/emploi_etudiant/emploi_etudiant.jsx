import { useState } from 'react';
import './emploi_etudiant.css';
import Session_item from './session_item';
import logo2 from "../../assets/logo2.png"


function Emploi_etudiant(){
  const [TD, setTD] = useState('NONE');

  const handleComboBoxChange = (event) => {
    const selectedOption = event.target.value;
    setTD(selectedOption);
    console.log(TD)
  };

  let tab 
  if (TD==="NONE"){
    tab=      
    <table border={1}>
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
  <table border={1}>
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
       <td id="Lundi1" ><Session_item/></td>
       <td id="Lundi2" ><Session_item/></td>
       <td id="Lundi3"></td>
       <td id="Lundi4" ><Session_item/></td>
       <td id="Lundi5" ><Session_item/></td>
       <td id="Lundi6" ><Session_item/></td>
       
     </tr>
     <tr>
       <td>Mardi</td>
       <td id="Mardi1" ><Session_item/></td>
       <td id="Mardi2" ><Session_item/></td>
       <td id="Mardi3" ></td>
       <td id="Mardi4" ><Session_item/></td>
       <td id="Mardi5" ><Session_item/></td>
       <td id="Mardi6" ><Session_item/></td>
     </tr>
     <tr>
       <td>Mercredi</td>
       <td><Session_item/></td>
       <td><Session_item/></td>
       <td></td>
       <td><Session_item/></td>
       <td><Session_item/></td>
       <td><Session_item/></td>
     </tr>
     <tr>
        <td>Jeudi</td>
        <td><Session_item/></td>
       <td><Session_item/></td>
       <td></td>
       <td><Session_item/></td>
       <td><Session_item/></td>
       <td><Session_item/></td>
     </tr>
     <tr>
        <td>Vendredi</td>
        <td><Session_item/></td>
       <td><Session_item/></td>
       <td></td>
       <td><Session_item/></td>
       <td><Session_item/></td>
       <td><Session_item/></td>
     </tr>
     <tr>
        <td>Samedi</td>
        <td><Session_item/></td>
       <td><Session_item/></td>
       <td></td>
       <td><Session_item/></td>
       <td><Session_item/></td>
       <td><Session_item/></td>
     </tr>
     
  </tbody>
</table>
  }
    return(
        <div>
        <div id="title">
            <p id="uni">Université supérieur d'informatique et du mathématique de Monastir</p>
            <p id="class">Groupe TD : ING1 INFO TD1 <br/><p id="date">(à partir de 01/09/2024)</p></p>
            
        </div>
<div id="TD">
<p>Choisir votre Groupe TD:</p>
          <select id="nivaux" onChange={handleComboBoxChange}>
          <option value="NONE">Choisir</option>
          <option value="CPI1-TD1">CPI1-TD1</option>
          <option value="CPI1-TD2">CPI1-TD2</option>
          <option value="CPI1-TD1">CPI2-TD1</option>
          <option value="CPI1-TD2">CPI2-TD2</option>
          <option value="ING1-INFO-TD1">ING1-INFO-TD1</option>
          <option value="ING1-INFO-TD2">ING1-INFO-TD2</option>
          <option value="ING1-INFO-TD2">ING1-INFO-TD2</option>
          <option value="ING1-EL-TD1">ING1-EL-TD1</option>
          <option value="ING2-INFO-TD1">ING2-INFO-TD1</option>
          <option value="ING2-EL-TD1">ING2-EL-TD1</option>
          <option value="ING3-EL-TD1">ING3-EL-TD1</option>
          <option value="ING3-EL-TD2">ING3-EL-TD2</option>
          <option value="L1-INFO-TD1">L1-INFO-TD1</option>
          <option value="L1-INFO-TD2">L1-INFO-TD2</option>
          <option value="L1-INFO-TD3">L1-INFO-TD3</option>
          <option value="L1-INFO-TD4">L1-INFO-TD4</option>
          <option value="L1-EEA-TD1">L1-EEA-TD1</option>
          <option value="L1-EEA-TD2">L1-EEA-TD2</option>
          <option value="L1-EEA-TD3">L1-EEA-TD3</option>
          <option value="L1-Math-TD1">L1-Math-TD1</option>
          <option value="L1-TIC-TD1">L1-TIC-TD1</option>
          <option value="L1-TIC-TD2">L1-TIC-TD2</option>
          <option value="L1-TIC-TD3">L1-TIC-TD3</option>
          <option value="L2-INFO-TD1">L2-INFO-TD1</option>
          <option value="L2-INFO-TD2">L2-INFO-TD2</option>
          <option value="L2-INFO-TD3">L2-INFO-TD3</option>
          <option value="L2-INFO-TD4">L2-INFO-TD4</option>
          <option value="L2-INFO-TD5">L2-INFO-TD5</option>
          <option value="L2-Math-TD1">L2-Math-TD1</option>
          <option value="L2-MIM-TD1">L2-MIM-TD1</option>
          <option value="L2-SE-TD1">L2-SE-TD1</option>
          <option value="L2-SE-TD2">L2-SE-TD2</option>
          <option value="L2-TIC-TD1">L2-TIC-TD1</option>
          <option value="L2-TIC-TD2">L2-TIC-TD2</option>
          <option value="L3-INFO-TD1">L3-INFO-TD1</option>
          <option value="L3-INFO-TD2">L3-INFO-TD2</option>
          <option value="L3-INFO-TD3">L3-INFO-TD3</option>
          <option value="L3-INFO-TD4">L3-INFO-TD4</option>
          <option value="L3-INFO-TD5">L3-INFO-TD5</option>
          <option value="L3-Math-TD1">L3-Math-TD1</option>
          <option value="L3-SE-TD1">L3-SE-TD1</option>
          <option value="L3-SE-TD2">L3-SE-TD2</option>
          <option value="L3-SE-TD3">L3-SE-TD3</option>
          <option value="L3-TIC-TD1">L3-TIC-TD1</option>
          <option value="L3-TIC-TD2">L3-TIC-TD2</option>
          <option value="MP1-GL-TD1">MP1-GL-TD1</option>
          <option value="MP1-III-TD1">MP1-III-TD1</option>
          <option value="MP1-SD-TD1">MP1-SD-TD1</option>
          <option value="MP2-GL-TD1">MP2-GL-TD1</option>
          <option value="MP2-III-TD1">MP2-III-TD1</option>
          <option value="MP2-SD-TD1">MP2-SD-TD1</option>
          <option value="MR1-EL-TD1">MR1-EL-TD1</option>
          <option value="MR1-GL-TD1">MR1-GL-TD1</option>
          <option value="MR2-EL-TD1">MR2-EL-TD1</option>
          <option value="MR2-GL-TD1">MR2-GL-TD1</option>
          </select>
</div>

        <div id="table">
        {tab}
  
</div>
        </div>
    )
}
export default Emploi_etudiant