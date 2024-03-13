import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../pages.css';

function Home() {
    // Define motion variants outside of the component body to prevent re-creation on each render
    const variants = {
        initial: {
            x: '-50%',
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        },
        exit: {
            y: '-300px',
            opacity: 0,
            transition: { duration: 0.6 } // Ensure consistent transition for exit
        }
    };

    return (
        <div className="home">
            <div className="headline-container">
                <AnimatePresence>
                    <motion.div
                        variants={variants}
                        initial="initial"
                        animate="animate" // Use animate variant for consistency
                        exit="exit"
                    >
                        <h1 className="headline">
                            The average student loan debt for recent college graduates is nearly $30,000.
                            How will you stack up?
                        </h1>
                        <Link to="/school">
                            <motion.button
                                type="submit"
                                className="btnNext"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Grade Me!
                            </motion.button>
                        </Link>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Home;
