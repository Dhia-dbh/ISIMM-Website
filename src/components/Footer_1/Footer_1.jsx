import { useState } from "react";
import "./Footer_1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import isimm1 from "../../assets/pfp.jpg";
import NavBar2 from "../commun/navbar/NavBar2";
import { BrowserRouter } from "react-router-dom";

function Footer_1(){
    const openLinkF = () => {
        //change the facebook link with e.Link
        window.open("https://www.facebook.com/profile.php?id=100063489403806", "_blank");
      };
      const openLinkG = () => {
        //change the facebook link with e.Link
        window.open("https://github.com/Ahmed5827", "_blank");
      };  
      const openLinkL = () => {
        //change the facebook link with e.Link
        window.open("https://www.linkedin.com/school/isimm/", "_blank");
      };
    return(

<footer id="foot">
<p className="Ifoot">
  Conception, réalisation :<br></br> Ing.Ahmed Chebbi<br></br> Ing.Dhia
  ben hammouda
</p>
<p className="Ifoot">
  Téléphone :+216 70 011 920 <br></br>Fax : +216 70 011 959
</p>
<p className="Ifoot">
  Adress:<br></br> Avenue de la Corniche, Monastir 5000 Tunisie
</p>
<p className="Ifoot">
  Connect With Us <br />
  <FaGithub id="git" size={23} onClick={openLinkG} /> {" "}
  <FaFacebook id="facebook" size={23} onClick={openLinkF} />{" "}
  <FaLinkedin id="linkedin" size={23} onClick={openLinkL} />
</p>
</footer>
    )
}
export default Footer_1;
