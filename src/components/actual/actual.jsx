import Footer from "../commun/footer/footer";
import { useState } from "react";
import "./actual.css";
import NavBar2 from "../commun/navbar/NavBar2";
import Grades from "../../assets/grades.jpg";
import Examan from "../../assets/Examan.jpg";
import Ins from "../../assets/inscriptions.jpg";
import Rattrapage from "../../assets/rattrapage.jpg";
import Emp from "../../assets/emploi-du-temps-en-ligne.jpg";
import Event from "../../assets/Event.jpg";
import Exchange from "../../assets/Exchange.jpg";
import logo from "../../assets/logo.png";
function Actual() {
  const [N, SetN] = useState([
    {
      Title: "Notes",
      Describtion: "Grades are now available",
      Link: "to releve des notes",
      Date: "12/10/2025",
    },
    {
      Title: "Calendrier des Examan",
      Describtion: "Exams Chalender are now available",
      Link: "to Exam",
      Date: "12/10/2025",
    },
    {
      Title: "Inscription",
      Describtion: "Notes about inscription",
      Link: "to PDF",
      Date: "12/10/2025",
    },
    {
      Title: "Rattrapage",
      Describtion: "Mr.Lazher rattrage de 16:00->18:00",
      Link: "Link to PDF DOC ",
      Date: "12/10/2025",
    },
    {
      Title: "Emploi du temps",
      Describtion: "Eploi du temp",
      Link: "to emploi page",
      Date: "12/10/2025",
    },
    {
      Title: "Event",
      Describtion: "DevFest Monastir",
      Link: "to formulaire about details or pdf",
      Date: "12/10/2025",
    },
    {
      Title: "Exchange program",
      Describtion: "Exchange program nigiria",
      Link: "formulaire or doc",
      Date: "12/10/2025",
    },
    {
      Title: "notification",
      Describtion: "Absence collective :). Cry about it ;) + te7chelkom",
      Link: "formulaire or doc",
      Date: "12/10/2025",
    },
  ]);

  const News = () => {
    return (
      <div class="cards">
        {N.map((e, index) => {
          let image;

          if (e.Title === "Notes") {
            image = Grades;
          } else if (e.Title === "Calendrier des Examan") {
            image = Examan;
          } else if (e.Title === "Inscription") {
            image = Ins;
          } else if (e.Title === "Rattrapage") {
            image = Rattrapage;
          } else if (e.Title === "Emploi du temps") {
            image = Emp;
          } else if (e.Title === "Event") {
            image = Event;
          } else if (e.Title === "Exchange program") {
            image = Exchange;
          } else {
            image = logo;
          }
          const openLink = () => {
            //change the facebook link with e.Link
            window.open("https://www.facebook.com/", "_blank");
          };

          return (
            <div onClick={openLink}  key={index}>
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img id="ph" src={image} alt="Avatar" />
                    <p>{e.Title}</p>
                    <p>{e.Date}</p>
                  </div>
                  <div class="flip-card-back">
                    <h5>Discription :</h5>
                    <p>{e.Describtion}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div class="BG">
      <NavBar2></NavBar2>
      <div class="news">
        <h3 id="title">Actualité</h3>
        <div id="grid">{News()}</div>
      </div>
      <Footer />
    </div>
  );
}
export default Actual;
