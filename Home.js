import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {Link} from 'react-router-dom'
import '../pages.css'


//Home includes home page & initial quesiton
function Home() {
    const variants={
        //All framer motion elements will initially be off the screen w/ 0 opacity
        initial:{
            x:'-50%',
            opacity:0
        },
        exit:{
            y: '-300px',
             opacity: 0,
        }
    }
    return (
        <div className="home">
            <div className="headline-container">
                <motion.div
                variants={variants}
                initial="initial"
                animate={{
                    x:0,
                    opacity:1
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                }}
                exit="exit"
                > 
                
                 <h1 className="headline">
                    The average student loan debt for recent college graduates is nearly $30,000.
                    How will you stack up?
                </h1>
                <Link to="/school">
                    <button
                        
                        type="submit"
                        className={'btnNext'}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                       
                    >
                        Grade Me!
                    </button>
                </Link> 
                <AnimatePresence></AnimatePresence>



                </motion.div>
            </div>
        </div>
    )
}

export default Home
