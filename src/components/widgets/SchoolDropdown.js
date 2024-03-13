import React, { useEffect, useContext } from 'react';
import { useSchoolData } from '../../contexts/SchoolContext';
import { FormContext } from '../../contexts/FormContexts';
import '../../pages.css';

function SchoolDropdown() {
    // Directly destructuring from the context using the new simplified context structure
    const { universities, isLoading, error } = useSchoolData();
    const { choice, setChoice } = useContext(FormContext); // Adjusted for direct destructuring

    // Filter universities based on name length
    const shorten = universities?.filter(university => university.INSTNM.length < 40) || [];

    useEffect(() => {
        console.log(choice);
    }, [choice]);

    const handleDropdownChange = (event) => {
        setChoice(event.target.value);
    };

    // Early return for loading state
    if (isLoading) return <p>Loading universities...</p>;
    // Early return for error state
    if (error) return <p>Error fetching universities: {error.message}</p>;

    return (
        <select id="schools" value={choice} onChange={handleDropdownChange}>
            {shorten.map(university => (
                <option key={university.ID} value={university.INSTNM}>
                    {university.INSTNM}
                </option>
            ))}
        </select>
    );
}

export default SchoolDropdown;
