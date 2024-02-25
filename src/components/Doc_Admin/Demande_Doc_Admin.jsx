import { useState } from 'react';
import "./Demande_Doc_Admin.css"
import NavBar2 from '../commun/navbar/NavBar2';
import Footer_1 from '../Footer_1/Footer_1';
import { Button } from 'react-bootstrap';

// I need to check the e-mail API for this

function Demande_Doc_Admin() {

    return(<div className='page'>
        <NavBar2></NavBar2>
        <div className='formulaire'>
      <h1>Demande du document administrative</h1>
      <div className='champ'>
        <label className='L'>Document demandé:</label>
          <select className="form-select" id='doc'>
          <option value="NONE">Choisir</option>
          <option value="Attestation de réussit">Attestation de réussit</option>
          <option value="Relevé du note">Relevé du note</option>
          <option value="Demande Carte etudiant">Demande Carte etudiant</option>
          <option value="Lettre d'appui">Lettre d'appui</option>
          </select></div>
          <div className='champ'>
        <label className='L'>Raison de la demande:</label>
        <input id='reason' class="form-control" type="text"/>  
        </div>
        <div className='buttom'>
       <Button type='submit'> Envoyer</Button>
       <p>Note : Votre demande va etre envoyer par mail, vous recevez la reponse de l'administration par mail</p>
       </div>
          

        </div>
        <Footer_1></Footer_1>
    </div>)
}
export default Demande_Doc_Admin