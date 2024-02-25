import { useState } from 'react';
import './Notes.css';
import { FcApproval } from "react-icons/fc";
import html2pdf from 'html2pdf.js';
import { FcHighPriority } from "react-icons/fc";
import NavBar2 from '../commun/navbar/NavBar2';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Footer_1 from '../Footer_1/Footer_1';
function Note_Tab (){

    const [notes,setNotes]=useState([{subject:"Algebre" ,Cofficient:2,	DS1:17,	DS2:null,	TP:16	,Examan_principale:13 ,	Examan_Controle:null}
    ,{subject:"Analyse" ,Cofficient:2,	DS1:12,	DS2:null,	TP:12	,Examan_principale:11 ,	Examan_Controle:null}
    ,{subject:"Electrostatique" ,Cofficient:1.5,	DS1:0.25,	DS2:null,	TP:6	,Examan_principale:8 ,	Examan_Controle:null}
    ,{subject:"Electrique" ,Cofficient:1.5,	DS1:11,	DS2:null,	TP:16	,Examan_principale:12 ,	Examan_Controle:null}
    ,{subject:"2CN" ,Cofficient:1,	DS1:19,	DS2:18,	TP:null	,Examan_principale:20 ,	Examan_Controle:null}
    ,{subject:"ASD" ,Cofficient:2,	DS1:8,	DS2:null,	TP:16	,Examan_principale:9.5 ,	Examan_Controle:null}
      ] )
    const [NIV,setNIV]= useState ("CPI1") //Nivau d'etude
    const [Semestre,setSemestre] = useState(true) //si true : relevé de note du semestre  sinon : relevé de note du session
    const [Principale,setPrincipale] = useState(true) //si true : relevé de note du session principale  sinon : relevé de note du session controle
    
    const generatePdf = () => {
      const element = document.getElementById('Tab');
        html2pdf(element);
      
    };

    const Moy =(Param)=>{
            if (NIV==="CPI1" ||NIV==="CPI2" || NIV==="ING1"|| NIV==="ING2"|| NIV==="ING3" )
            {   
                if (Param.Examan_Controle===null)
                {
                  if (Param.DS2!==null){
                    return(Param.DS1*0.2+Param.DS2*0.1+Param.Examan_principale*0.7)
                  }
                  else
                  {
                    return(Param.DS1*0.2+Param.TP*0.1+Param.Examan_principale*0.7)
                  }
                }
                else
                {
                  if (Param.DS2!==null){
                    return(Param.DS1*0.2+Param.TP*0.1+((Param.Examan_principale+Param.Examan_Controle)/2)*0.7)
                  }
                  else
                  {
                    return(Param.DS1*0.2+Param.DS2*0.1+((Param.Examan_principale+Param.Examan_Controle)/2)*0.7)
                  }

                }              
            }
            else{
                if (Param.Examan_Controle===null)
                {
                  if (Param.DS2!==null){
                    return(Param.DS1*0.2+Param.DS2*0.1+Param.Examan_principale*0.7)
                  }
                  else
                  {
                    return(Param.DS1*0.3+Param.TP*0.1+Param.Examan_principale*0.7)
                  }
                }
                else
                {
                  if (Param.DS2!==null){
                    return(Param.DS1*0.2+Param.TP*0.1+Math.max((Param.Examan_principale,Param.Examan_Controle)/2)*0.7)
                  }
                  else
                  {
                    return(Param.DS1*0.2+Param.DS2*0.1+Math.max((Param.Examan_principale,Param.Examan_Controle)/2)*0.7)
                  }

                }    
    
              
            }
  
    }
    const note = (param) => {
        if(param===null)
        {
            return("-")
        }
        else
        {
            return(param)
        }
      };
    const putremarque = () =>{
      let MoyG = []
      {notes.map(e => MoyG.push({Cofficient: e.Cofficient, Moy: Moy(e)}))}
      let somme =0;
      let Sumcoff=0;
      MoyG.forEach(e => somme+=e.Cofficient*e.Moy)
      MoyG.forEach(e => Sumcoff+=e.Cofficient)
      let moyenne= (somme/Sumcoff).toFixed(2)
      if (Semestre)
      {
        if ( moyenne>=10)
        {
            return(<h3>remarque : validé <FcApproval></FcApproval></h3>)
        }
        else
        {
            return(<h3>remarque : Non validé <FcHighPriority></FcHighPriority> </h3>)
        }
      }
      else{
        if (Principale)
        {
          if ( moyenne>=10)
          {
              return(<h3>remarque : Admis <FcApproval></FcApproval> </h3>)
          }
          else
          {
              return(<h3>remarque : Controle <FcHighPriority></FcHighPriority> </h3>)
          }
        }
        else
        {
          if ( moyenne>=10)
          {
              return(<h3>remarque : Admis <FcApproval></FcApproval> </h3>)
          }
          else
          {
              return(<h3>remarque : refusé <FcHighPriority></FcHighPriority> </h3>)
          }
        }

      }

    }

    const Mention = () =>{
      
      let MoyG = []
      {notes.map(e => MoyG.push({Cofficient: e.Cofficient, Moy: Moy(e)}))}
      let somme =0;
      let Sumcoff=0;
      MoyG.forEach(e => somme+=e.Cofficient*e.Moy)
      MoyG.forEach(e => Sumcoff+=e.Cofficient)
      let moyenne= (somme/Sumcoff).toFixed(2)
      
      if (moyenne >=16 && moyenne<=20)
      {
        return("Excellent")
      }
      else if (moyenne <16 && moyenne>=14)
      {
        return("Bien")
      }
      else if (moyenne <14 && moyenne>=12)
      {
        return("Assez-Bien")
      }
      else if (moyenne <12 && moyenne>=10)
      {
        return("Passable")
      }
    }

    const tab_data_renderer = () => {
      let MoyG = []
      {notes.map(e => MoyG.push({Cofficient: e.Cofficient, Moy: Moy(e)}))}
      let somme =0;
      let Sumcoff=0;
      MoyG.forEach(e => somme+=e.Cofficient*e.Moy)
      MoyG.forEach(e => Sumcoff+=e.Cofficient)
      let moyenne= (somme/Sumcoff).toFixed(2)
     
      
      return (
        <tbody>
          {notes.map((e, index) => (
            
            Moy(e) > 10 ? (
              
              <tr class="table-success" key={index}>
                <th>{note(e.subject)}</th>
                <td>{note(e.Cofficient)}</td>
                <td>{note(e.DS1)}</td>
                <td>{note(e.DS2)}</td>
                <td>{note(e.TP)}</td>
                <td>{note(e.Examan_principale)}</td>
                <td>{note(e.Examan_Controle)}</td>
                <td>{Moy(e)}</td>
                
              </tr>
            ) : (
              <tr class="table-danger" key={index}>
                <th>{note(e.subject)}</th>
                <td>{note(e.Cofficient)}</td>
                <td>{note(e.DS1)}</td>
                <td>{note(e.DS2)}</td>
                <td>{note(e.TP)}</td>
                <td>{note(e.Examan_principale)}</td>
                <td>{note(e.Examan_Controle)}</td>
                <td>{Moy(e)}</td>
              </tr>
            )
          ))}
          <tr class="table-info">
            <th>Moyenne Génerale</th>
            <td>{Sumcoff}</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>{moyenne}</td>
          </tr>
        </tbody>
      );
    };

return(
  <div>
<div className='page'>
<NavBar2></NavBar2>
<div id='page'>
<div><h1>Relevé de Note</h1></div>
<div>
    <table id='Tab' border={1} class="table table-hover">
  <thead>
    <tr class="table-primary" >
      <th scope="col" >matiere</th>
      <th scope="col" >Cofficient</th>
      <th scope="col">DS1</th>
      <th scope="col">DS2</th>
      <th scope="col">TP</th>
      <th scope="col">Examan principale</th>
      <th scope="col">Examan Controle</th>
      <th scope="col">Moyenne</th>
    </tr>
  </thead>
  {tab_data_renderer()}

</table>
</div>
<div id='remarque'>
    {putremarque()}
    <h3>{Mention()}</h3>
   
    <button class="btn btn-primary" onClick={generatePdf()}>Imprimer</button>
</div>
<div id='buttons'>
    <button class="btn btn-primary">Demande de 2éme correction</button>
    
   
</div>

</div>
<Footer_1></Footer_1>
</div>

</div>
)


}
export default Note_Tab