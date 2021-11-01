import React, { useEffect, useState, setVisible, useRef, useContext } from "react";
import { SchoolContext, useValues }  from '../../contexts/SchoolContext';
import { FormContext } from '../../contexts/FormContexts'
import "../../pages.css"

function SchoolDropdown() {
    const universities = useValues();
    const shorten = universities.filter((university) => 
        university.INSTNM.length < 40
    );
    const { dropdownItem } = useContext(FormContext);
    const [choice, setChoice] = dropdownItem;
    const [change, setChange] = useState(false)
    function getChoice(){
        const select = document.getElementById('schools');
        const val = (change ? select.options[select.selectedIndex].text : ' ')
        return val


    }

    
    return (
        <div className="dropdown">
            <select className="dropdown-content" onClick= {() => {setChange(true);setChoice(getChoice())}} placeholder="Search... " name="schools" id="schools">
            {shorten.map((university, index) => (
              
              <option value={university}>{university.INSTNM}</option>
           ))}

            </select>
            {console.log(choice)}
        </div>
    )
}

export default SchoolDropdown
