import React, {useContext, useState} from 'react'
import { FormContext } from '../../contexts/FormContexts'
import '../../pages.css'
import { motion } from 'framer-motion'
function Radios() {
    //context variables
    const {state} = useContext(FormContext) 
    const [stateStatus,setStateStatus] = state
    
    //functions
    

    return (
        <div>
              <div className="state-select">
                    <motion.a
                        type="submit"
                        className={`btn ${stateStatus === 0 ? "btn-state-highlighted" : "btn-state"}`}
                        onClick={(e) => {setStateStatus(0)}}
                        
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        >
                    In-State
                    </motion.a>
         {           console.log(stateStatus)}
                    <motion.a
                         type="submit"
                        className={`btn ${stateStatus === 1 ? "btn-state-highlighted" : "btn-state"}`}
                        onClick={(e) => {setStateStatus(1)}}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                    Out-Of-State
                    </motion.a>
              
              <span className="radio-control-out"></span>
            </div>
        </div>
    )
}

export default Radios
