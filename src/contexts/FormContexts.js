import React, { createContext, useState } from 'react';

// Custom hook to encapsulate form state logic
function useFormState() {
  const [choice, setChoice] = useState("Alabama A & M University");
  const [aidInput, setAidInput] = useState("");
  const [stateStatus, setStateStatus] = useState(0); // 0 = instate, 1 = out of state

  return {
    choice, setChoice,
    aidInput, setAidInput,
    stateStatus, setStateStatus,
  };
}

// Context setup with a default structure
export const FormContext = createContext({
  choice: "",
  setChoice: () => {},
  aidInput: "",
  setAidInput: () => {},
  stateStatus: 0,
  setStateStatus: () => {},
});

/**
 * Provides a context for form data across all routes.
 */
export const FormProvider = ({ children }) => {
  const formState = useFormState();

  return (
    <FormContext.Provider value={formState}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
