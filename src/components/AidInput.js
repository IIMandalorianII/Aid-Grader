import React, { useContext } from "react";
import "../pages.css";
import { motion } from 'framer-motion';
import { useHistory } from "react-router-dom"; // Import useHistory for navigation
import { FormContext } from "../contexts/FormContexts";
import AidInputBox from "./widgets/AidInputBox";
import Radios from './widgets/Radios';

function AidInput() {
    // Adjusted for direct destructuring
    const { choice } = useContext(FormContext);

    // Framer motion variants
    const variants = {
        initial: {
            x: '-20rem',
            opacity: 0
        },
        exit: {
            y: '-300px',
            opacity: 0
        }
    };

    const history = useHistory(); // Using useHistory for navigation

    // Function to handle navigation programmatically
    const navigateToResults = () => {
        history.push("/results");
    };

    return (
        <div className="aid-input">
            <div className="aid-input-container">
                <motion.div
                    variants={variants}
                    initial="initial"
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                    exit="exit"
                > 
                    <h1 className="headline-aid">{choice}</h1>
                    <h1 className="headline-small">Financial Aid Offered (USD)</h1>
                    <AidInputBox />
                    <Radios />
                        
                    <motion.button // Changed from motion.a to motion.button
                        onClick={navigateToResults} // Use onClick to handle navigation
                        type="submit"
                        className={'btnNext'}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Results
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}

export default AidInput;
