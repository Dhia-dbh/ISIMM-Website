import { useState } from "react";
import "./Formation.css";
import NavBar2 from "../commun/navbar/NavBar2";
import Footer_1 from "../Footer_1/Footer_1";
import LOGO from "../../assets/logo.png"
import Math from "../../assets/MATHÉMATIQUES APPLIQUÉES.jpg"
import Tech from "../../assets/tech.jpg"
import Info from "../../assets/informatique.jpeg"
import SE from "../../assets/SYSTÈMES EMBARQUÉS.jpg"
import IOT from "../../assets/RÉSEAUX ET IOT.jpg"
import MC from "../../assets/MICROÉLECTRONIQUE.jpg"
import MI from "../../assets/MESURE INSTRUMENTATION ET MÉTROLOGIE.jpg"
import LI from "../../assets/LICENCE SCIENCES DE L’INFORMATIQUE.jpg"
import IF from "../../assets/INGÉNIEURS INFORMATIQUE.jpg"
import II from "../../assets/INGÉNIERIE EN INSTRUMENTATION INDUSTRIELLE.jpg"
import IMC from "../../assets/ing_micro_electro.jpg"
import GL from "../../assets/GÉNIE LOGICIEL.png"
import DS from "../../assets/DATA SCIENCE.jpg"

function Formations(){
    const [Formations,setFormations]=useState([
    {nom:'INGÉNIEURS ELECTRONIQUE ET MICROÉLECTRONIQUE',img:Tech ,Link:""},
    {nom:'LICENCE MATHÉMATIQUES APPLIQUÉES',img:Math ,Link:"/formation/LM"},
    {nom:"LICENCE EEA - PARCOURS : SYSTÈMES EMBARQUÉS (SE)",img:SE,Link:""},
    {nom:"LICENCE TIC- PARCOURS: RÉSEAUX ET IOT (RIOT)",img:IOT,Link:""},
    {nom:"LICENCE EEA - PARCOURS: MESURE INSTRUMENTATION ET MÉTROLOGIE (MIM)",img:MC,Link:"/formation/MIM"},
    {nom:" MASTER PROFESSIONNEL : INGÉNIERIE EN INSTRUMENTATION INDUSTRIELLE" ,img:MI,Link:"" },
    {nom:"LICENCE SCIENCES DE L’INFORMATIQUE",img:LI,Link:""},
    {nom:"INGÉNIEURS INFORMATIQUE",img:IF,Link:""},
    {nom:"INGÉNIERIE EN INSTRUMENTATION INDUSTRIELLE",img:II,Link:""},
    {nom:"MASTER DE RECHERCHE EN MICROÉLECTRONIQUE ET INSTRUMENTATION",img:IMC,Link:"/formation/MRMI"},
    {nom:"MASTER DE RECHERCHE EN GÉNIE LOGICIEL",img:GL,Link:"/formation/MRGL"},
    {nom:"MASTER PROFESSIONNEL EN GÉNIE LOGICIEL",img:DS,Link:""},
    {nom:"PRÉPARATOIRE INTÉGRÉ EN INFORMATIQUE",img:Info,Link:""},
    ])
    const renderer=()=>{
        return Formations.map((e, index) => (
            
            <div class="card" key={index}>
                <div class="card-body">
                    <img src={e.img} alt={e.nom} height={220} width={210} />
                    
                    <h5 class="card-title">{e.nom}</h5>
                    
                    <a href={e.Link} class="btn btn-primary">Learn More</a>
                </div>
            </div>
        ));
    }
        return(
        <div className="page"> 
        <div style={{ position: 'fixed', width: '100%', zIndex: 2 }}>
            <NavBar2></NavBar2></div>  
            <div className="bgF">
            <h1>Nos Formations</h1>
            <hr/>
            <div className="gridf" >
                {renderer()}
                </div>
            </div>
            <Footer_1></Footer_1>
        </div>
    )
}
export default Formations