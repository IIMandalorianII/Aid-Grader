//Includes form state data accross all routes

import React, { createContext, useState } from 'react';

export const FormContext = createContext();

/**
 * Provides a context for form data.
 * @param {Object} props - The component props.
 * @returns {JSX.Element} The form provider component.
 */
export const FormProvider = (props) => {
    //Existing Context
  
    //Values to be passed into context provider
    const [choice, setChoice] = useState("Alabama A & M University");
    const [aidInput, setAidInput] = useState("")
    //0 = instate, 1 = out of state
    const [stateStatus, setStateStatus] = useState(0)

    return (
        <FormContext.Provider
          value={{
            dropdownItem: [choice, setChoice],
            aidAmt: [aidInput, setAidInput],
            state: [stateStatus, setStateStatus]
          }}
        >
          {props.children}
        </FormContext.Provider>
      );
};

export default FormProvider;