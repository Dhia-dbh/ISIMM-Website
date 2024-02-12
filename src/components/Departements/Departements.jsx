import { useState } from "react";
import "./Departements.css";
import NavBar2 from "../commun/navbar/NavBar2";
import Footer_1 from "../Footer_1/Footer_1";
import LOGO from "../../assets/logo.png"
import Math from "../../assets/Math.jpg"
import Tech from "../../assets/tech.jpg"
import Info from "../../assets/informatique.jpeg"
function Departements(){
    const [Departements,setDepartements]=useState([{nom:'Informatique' ,img:Info, chef:'Lazher Hamel',Link:""},{nom:'Technologie',img:Tech , chef:'Sadok Bezine',Link:""},{nom:'Mathématique',img:Math , chef:'Mohamed Eloued',Link:""}])
    const renderer=()=>{
        return Departements.map((e, index) => (
            <div class="card" key={index}>
                <div class="card-body">
                    <img src={e.img} alt={e.nom} height={220} width={210} />
                    <h5 class="card-title">{e.nom}</h5>
                    <p class="card-text">Directeur : {e.chef}</p>
                    <a href={e.LINK} class="btn btn-primary">Learn More</a>
                </div>
            </div>
        ));
    }
        return(
        <div className="page"> 
        <div style={{ position: 'fixed', width: '100%', zIndex: 2 }}>
            <NavBar2></NavBar2></div>  
            <div className="bg">
            <h1>Départements</h1> 
            <div className="Dept">
            
                {renderer()}
            </div>
            </div>
            <Footer_1></Footer_1>
        </div>
    )
}
export default Departements