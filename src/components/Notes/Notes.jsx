import { useState } from 'react';
import './Notes.css';
import Note_element from './Note_element';
import { FcApproval } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
import Footer_1 from '../Footer_1/Footer_1';
function Notes() {

    return(
        <div>
        <div id='List-Notes'>
        <h2>Module : informatique</h2>
        <table>
            <tr>
                <td><Note_element/></td>
                <td><Note_element/></td>
            </tr>
            <tr>
                <td><Note_element/></td>
                <td><Note_element/></td>
            </tr>
        </table>
        </div>
        <div id='List-Notes'>
        <h2>Module : mathématiques</h2>
        <table>
            <tr>
                <td><Note_element/></td>
                <td><Note_element/></td>
            </tr>
            <tr>
                <td><Note_element/></td>
                <td><Note_element/></td>
            </tr>
        </table>
        </div>
        <div id='List-Notes'>
        <h2>Moyenne de Semestre : 12 </h2>
        <h2>Semestre validé <FcApproval size={35}/></h2>

        </div>
<div>
    
</div>
        </div>
    )


}
export default Notes