import React, {createContext, useContext, useState, useEffect} from 'react'


export const SchoolContext = createContext();

export const useValues = () => { 
  return useContext(SchoolContext)
}

export const SchoolProvider = (props) => {
    
    const [universities, setUniversities] = useState([]);

    //Values to be passed into context provider

    useEffect(() => {
      //Calls "getData" every time the state of universities is changed
        getData()
    },[universities]);

    const getData = async () => {
      //Get data and convert to json
      const data = await (await fetch('./UniversityData.json')).json();

      setUniversities(data);
      //  console.log('request sent')
    }
    return (
        <SchoolContext.Provider
          value={
            universities
          }
        >
          {props.children}
        </SchoolContext.Provider>
      );
};

