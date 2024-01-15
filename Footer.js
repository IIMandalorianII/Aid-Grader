import React from 'react'
import { motion } from 'framer-motion'
import '../../pages.css'
function Footer() {
    return (
        <div className='footer-container'>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            
            >
                <h1 className='headline footer-text'>AidGrader</h1>
            </motion.div>
        </div>
    )
}

export default Footer
