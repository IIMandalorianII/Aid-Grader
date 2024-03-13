import React, {useEffect, useContext } from 'react';
import { useSchoolData } from '../../contexts/SchoolContext';
import { FormContext } from '../../contexts/FormContexts';
import '../../pages.css';

function SchoolDropdown() {
    const { universities, isLoading, error } = useSchoolData(); // Adjusted to use the new context structure
    const { dropdownItem } = useContext(FormContext);
    const [choice, setChoice] = dropdownItem;

    // Filter universities based on name length
    const shorten = universities?.filter(university => university.INSTNM.length < 40) || [];

    useEffect(() => {
        console.log(choice);
    }, [choice]);

    const handleDropdownChange = (event) => {
        setChoice(event.target.value);
    };

    if (isLoading) return <p>Loading universities...</p>; // Handle loading state
    if (error) return <p>Error fetching universities: {error.message}</p>; // Handle error state

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
