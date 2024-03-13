import React, { useContext } from 'react';
import { FormContext } from '../../contexts/FormContexts';
import '../../pages.css';
import { motion } from 'framer-motion';

function Radios() {
    const { stateStatus, setStateStatus } = useContext(FormContext);

    return (
        <div className="state-select">
            <motion.button
                type="button"
                className={`btn ${stateStatus === 0 ? "btn-state-highlighted" : "btn-state"}`}
                onClick={() => setStateStatus(0)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            >
                In-State
            </motion.button>

            <motion.button
                type="button"
                className={`btn ${stateStatus === 1 ? "btn-state-highlighted" : "btn-state"}`}
                onClick={() => setStateStatus(1)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            >
                Out-Of-State
            </motion.button>
        </div>
    );
}

export default Radios;
