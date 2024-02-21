import { useState } from "react";
import "./session_item.css";

function Session_item({ classe, prof, matiere, salle }) {
  return (
    <>
      <p className="classe">{classe}</p>
      <p className="Prof">{prof}</p>
      <p className="Subject">{matiere}</p>
      <p className="salle">{salle}</p>
    </>
  );
}
export default Session_item;
