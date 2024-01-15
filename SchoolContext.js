import React, { createContext, useContext, useState, useEffect } from 'react';

export const SchoolContext = createContext();

export const useValues = () => { 
  return useContext(SchoolContext);
}

export const SchoolProvider = (props) => {
    const [universities, setUniversities] = useState([]);

    // Fetches data only once when the component mounts
    useEffect(() => {
        const getData = async () => {
            // Get data and convert to json
            const data = await (await fetch('./UniversityData.json')).json();
            setUniversities(data);
        };

        getData();
    }, []); // Empty dependency array ensures this runs only once

    return (
        <SchoolContext.Provider value={universities}>
            {props.children}
        </SchoolContext.Provider>
    );
};
