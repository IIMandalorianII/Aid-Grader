import React, {useEffect, useContext } from 'react';
import { useValues } from '../../contexts/SchoolContext';
import { FormContext } from '../../contexts/FormContexts';
import '../../pages.css';

function SchoolDropdown() {
    const universities = useValues();
    const shorten = universities.filter(university => university.INSTNM.length < 40);
    const { dropdownItem } = useContext(FormContext);
    const [choice, setChoice] = dropdownItem;

    // useEffect hook to log the choice only when it changes
    useEffect(() => {
        console.log(choice);
    }, [choice]);

    // Function to handle dropdown change
    const handleDropdownChange = (event) => {
        setChoice(event.target.value);
    };

    return (
        <select id="schools" onChange={handleDropdownChange}>
            {shorten.map(university => (
                <option key={university.ID} value={university.INSTNM}>
                    {university.INSTNM}
                </option>
            ))}
        </select>
    );
}

export default SchoolDropdown;
