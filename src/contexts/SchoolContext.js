import React, { createContext, useContext, useState, useMemo } from 'react';
import universitiesData from '../data/UniversityData.json'; // Ensure the path is correct

export const SchoolContext = createContext();

export const useSchoolData = () => useContext(SchoolContext);

export const SchoolProvider = ({ children }) => {
    // Directly use imported data, assuming the data won't change
    // No need for loading or error states
    const [universities] = useState(universitiesData);

    // Since the universities data is static and loaded instantly from a local file,
    // you can simplify the context value to just the data without loading or error states
    const contextValue = useMemo(() => ({
        universities,
    }), [universities]);

    return (
        <SchoolContext.Provider value={contextValue}>
            {children}
        </SchoolContext.Provider>
    );
};
