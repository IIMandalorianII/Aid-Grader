import React, {useContext } from "react";
import "../pages.css"
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import { FormContext } from "../contexts/FormContexts";
import AidInputBox from "./widgets/AidInputBox";
import Radios from './widgets/Radios'
import "../pages.css"
//Aid input is the second page
function AidInput() {
    const { dropdownItem } = useContext(FormContext);
    const [choice ] = dropdownItem;

    //framer varients
    const variants={
        //All framer motion elements will initially be off the screen w/ 0 opacity
        initial:{
            x:'-20rem',
            opacity:0
        },
        exit:{
            y: '-300px',
             opacity: 0
        }
    }
    return (
        <div className="aid-input">
            <div className="aid-input-container">
                    
                <motion.div
                    
                    variants={variants}
                    initial="initial"
                    animate={{
                        x:0,
                        opacity:1
                    }}
                    transition={{
                        duration: 0.75,
                        ease: "easeOut",
                    }}
                    exit="exit"> 
                        <h1 className="headline-aid">{choice}</h1>
                        <h1 className="headline-small">Financial Aid Offered (USD)</h1>
                        <AidInputBox />
                        <Radios />
                        
                    <Link to="/results" >
                        <motion.a
                            type="submit"
                            className={'btnNext'}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Results
                        </motion.a>
                    </Link> 
                </motion.div>
            </div>
        </div>
    )
}

export default AidInput
