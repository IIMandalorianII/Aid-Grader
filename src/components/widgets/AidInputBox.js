import React, { useContext, useState } from 'react'
import { FormContext } from "../../contexts/FormContexts"
import { AnimatePresence, motion } from 'framer-motion'
function AidInputBox() {
    //Context variables
    const { aidAmt } = useContext(FormContext)
    const [aidInput, setAidInput] = aidAmt;
    const [warning, setWarning] = useState(false)
    const aidUpdate = (e) => {
        setAidInput(e.target.value);
        aidInput.toString().length === 5 ? setWarning(true) : setWarning(false);
    }
    return (
        <div>
            <input
            className='aid-input'
            value={aidInput}
            onChange={aidUpdate}
            max='100000'
            placeholder="Enter Aid"
            maxlength="5"
            >
            </input>
            <AnimatePresence>
              {warning && (
                <motion.div
                  className="error"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                  }}

                >
                  Maximum: $99,999
                </motion.div>
              )}
            </AnimatePresence>
        </div>
    )
}

export default AidInputBox
