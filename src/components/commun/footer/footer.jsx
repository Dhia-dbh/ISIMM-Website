import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
export default function Footer({}) {
  return (
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
        <FaGithub id="git" size={23} /> <FaFacebook id="facebook" size={23} />{" "}
        <FaLinkedin id="linkedin" size={23} />
      </p>
    </footer>
  );
}
