import { useState } from "react";
import "./Clubs.css";
import { Navbar } from "react-bootstrap";
import NavBar2 from "../commun/navbar/NavBar2";
import CPU from "../../assets/CPUlogo.png";
import CRI from "../../assets/CRI.jpeg";
import ATIA from "../../assets/ATIA.png";
import Englistics from "../../assets/Englistics.jpeg"
import IEEE from "../../assets/IEEE.jpeg"
import Footer_1 from "../Footer_1/Footer_1";
function Clubs(){

    const [Clubs,setClubs]=useState([{img : CRI , name:"CRI" , BIO:"CRI est un groupe des jeunes actifs doués par la conception et le développement robotique à l'ISIMM" ,LINK:"https://www.facebook.com/C.R.ISIMM"},{img : CPU , name:"CPU" , BIO:"Cyber Processing Unit (CPU-ISIMM) is a student-run organization headquartered in ISIMM, Monastir, Tu" ,LINK:"https://www.facebook.com/CPU.ISIMM"},
    {img : ATIA, name:"ATIA" , BIO:"est un club universitaire technologique spécialisé en intelligence artificielle ayant un but éducatif" ,LINK:"https://www.facebook.com/profile.php?id=100086600541050"},{img : Englistics , name:"Englistics" , BIO:"A wind of success , A spirit of unity. student-run organization headquartered in ISIMM, Monastir, Tu" ,LINK:"https://www.facebook.com/Englistics.isimm"},
    {img : IEEE , name:"IEEE" , BIO:"IEEE is the world's largest professional organization striving to advanced technology for humanity." ,LINK:"https://www.facebook.com/IEEEISIMMSB"},])

    const renderer = () => {
        return Clubs.map((e, index) => (
            <div class="card" key={index}>
                <div class="card-body">
                    <img src={e.img} alt={e.name} height={220} />
                    <h5 class="card-title">{e.name}</h5>
                    <p class="card-text">{e.BIO}</p>
                    <a href={e.LINK} class="btn btn-primary">Learn More</a>
                </div>
            </div>
        ));
    }

return(
    <div className="page">
    <div style={{ position: 'fixed', width: '100%', zIndex: 2 }}>
        <NavBar2></NavBar2></div>
        <div className="bg"> <h1>Clubs</h1>
        <div className="clubs" >
        {renderer()}
        </div>
        </div>
        <Footer_1></Footer_1>
    </div>
)
}
export default Clubs