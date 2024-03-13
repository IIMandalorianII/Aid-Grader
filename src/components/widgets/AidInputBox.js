import React, { useContext, useState } from 'react';
import { FormContext } from "../../contexts/FormContexts";
import { AnimatePresence, motion } from 'framer-motion';

function AidInputBox() {
    // Context variables adjusted for direct access
    const { aidInput, setAidInput } = useContext(FormContext);
    const [warning, setWarning] = useState(false);

    const aidUpdate = (e) => {
        const input = e.target.value;
        setAidInput(input);
        input.length === 5 ? setWarning(true) : setWarning(false);
    };

    return (
        <div>
            <input
                className='aid-input'
                value={aidInput}
                onChange={aidUpdate}
                type="number" // Ensure numeric input
                max="99999"
                placeholder="Enter Aid"
                maxLength="5" // Corrected to camelCase
            />
            <AnimatePresence>
                {warning && (
                    <motion.div
                        className="error"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }} // Provide an exit animation
                        transition={{ type: "spring" }}
                    >
                        Maximum: $99,999
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default AidInputBox;
