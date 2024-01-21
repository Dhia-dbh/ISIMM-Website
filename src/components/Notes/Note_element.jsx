import { useState } from 'react';
import './Notes.css';
import { FcApproval } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
function Note_element(){
    const [NIV,setNIV]= useState ("CPI1")
    const [matiere,setmatiere] = useState("Algebre")
    const [DS1 , setDS1] = useState(16)
    const [DS2 , setDS2] = useState(null)
    const [TP , setTP] = useState(11)
    const [principale , setprincipale] = useState(17)
    const [Controle , setcontrole] = useState(null)
    const Moy =()=>{
            if (NIV==="CPI1" ||NIV==="CPI2" || NIV==="ING1"|| NIV==="ING2"|| NIV==="ING3" )
            {   
                if (DS2!==null)
                {
                    return(DS1*0.2+DS2*0.1+((principale+Controle)/2)*0.7)
                }
                else if (Controle!==null)
                {
                    return(DS1*0.2+TP*0.1+((principale+Controle)/2)*0.7)
                }
                else{
                    return(DS1*0.2+TP*0.1+principale*0.7) 
                }
                
            }
            else{
                if (Controle!==null)
                {
                    return(DS1*0.2+TP*0.1+(Math.max(principale,Controle))*0.7)
                }
    
                return(DS1*0.2+TP*0.1+(Math.max(principale,Controle))*0.7) 
            }
  
    }
    const note = (param) => {
        if(param===null)
        {
            return("acune note")
        }
        else
        {
            return(param)
        }
      };
    const putremarque = () =>{
        if ( Moy()>=10)
        {
            return(<p>remarque : validé <FcApproval></FcApproval> </p>)
        }
        else
        {
            return(<p>remarque : Non validé <FcHighPriority></FcHighPriority> </p>)
        }
    }

return(
    <div id='Note'>
        <h4>Nom du matiére : {matiere}</h4>
        <h6>DS1 : {note(DS1)}</h6>
        <h6>DS2 : {note(DS2)}</h6>
        <h6>TP : {note(TP)}</h6>
        <h6>Examan principale : {note(principale)}</h6>
        <h6>Examan Controle : {note(Controle)}</h6>
        <h6>Moyenne : {Moy()}</h6>
        <h6>{putremarque()}</h6>
    </div>
)
}
 export default Note_element;