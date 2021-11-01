import React, {useContext} from 'react'
import "../pages.css"
import { motion } from 'framer-motion'
import SchoolDropdown from './widgets/SchoolDropdown'
import { Link } from "react-router-dom";
import { FormContext } from '../contexts/FormContexts'

function UniversityInput() {
    //context variables
    const { dropdownItem, } = useContext(FormContext);
    const [choice, setChoice] = dropdownItem;
    
    //State variables
   

    
    

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
        <div className="school-input">
            <div className="school-input-container">

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
                    <h1 className="headline">Choose a School</h1>
                    <SchoolDropdown />
            </motion.div>
            <Link to="/aid">
            
              <motion.a
                 disabled={`${choice === "No Selection" ? "true" : "false"}`}
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
                 exit="exit"
                className={'btnNext'}
                id='toAid'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Next
              </motion.a>
            </Link> 
            
            </div>
        </div>
    )
}

export default UniversityInput
