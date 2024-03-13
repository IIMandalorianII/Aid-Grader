import React, { useCallback,useContext, useState, useEffect } from "react";
import { FormContext } from '../contexts/FormContexts';
import { useSchoolData } from '../contexts/SchoolContext';
import { motion } from "framer-motion";
import '../pages.css';
import CountUp from 'react-countup';

function Result() {
    const { universities } = useSchoolData();
    const { choice, aidInput, stateStatus } = useContext(FormContext);
    
    const [phrase, setPhrase] = useState("");
    const [score, setScore] = useState(0);
    
    const filteredData = universities.find(uni => uni.INSTNM.includes(choice)) ?? {};
    const { TUITIONFEE_IN: inStateTuition, TUITIONFEE_OUT: outStateTuition, INSTURL: schoolWebsite } = filteredData;

    const calculateScore = useCallback(() => {
        const tuition = stateStatus === 0 ? inStateTuition : outStateTuition;
        const netCost = tuition - aidInput;
        const points = netCost < 500 ? 95 :
                        netCost < 5000 ? 80 :
                        netCost < 15000 ? 50 :
                        netCost < 25000 ? 40 :
                        netCost < 35000 ? -30 :
                        netCost < 40000 ? -35 : -50;

        setScore(points);
        const newPhrase = points >= 85 ? 'Excellent' :
                           points >= 65 ? 'Good' :
                           points >= 50 ? 'Ok' :
                           points >= 35 ? 'Meh' :
                           points >= 10 ? 'Bad' :
                           points >= -15 ? 'Yikes' : 'Very Bad';
        setPhrase(newPhrase);


    }, [aidInput, inStateTuition, outStateTuition, stateStatus]);
    useEffect(() => {
        calculateScore();
    }, [calculateScore]); // Depend on relevant variables


    const colorProgression = () => {
        const intensity = Math.abs(score - 35);
        return score > 0 ? ['hsla(119, 99%, 22%, 1)', `hsla(119, ${99 + intensity}%, 62%, 1)`] :
                          ['rgba(266, 1, 1, 0.7)', `rgba(${266 + intensity * 2}, 1, 1, 1)`];
    };

    const variants = {
        initial: { x: '-50%', opacity: 0 },
        exit: { y: '-300px', opacity: 0 }
    };

    return (
        <div className="result-container">
            <motion.div 
                variants={variants}
                initial="initial"
                animate={{ color: colorProgression(), x: 0, opacity: 1 }}
                className='score-container'
                transition={{ duration: 3, ease: "easeOut" }}
                exit="exit"
            >
                <CountUp delay={1} start={0} end={score} duration={3} suffix="/100">
                    {({ countUpRef }) => <span ref={countUpRef} className='score'/>}
                </CountUp>
                <h1 className="headline-small" style={{marginTop:0}}>"{phrase}"</h1>
            </motion.div>
            {/* Additional Information Display */}
            <div className="result-buttons">
                <motion.a href={`https://${schoolWebsite}`} target="_blank" className={'btn btn-state'} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>School Website</motion.a>
                <motion.a href="https://studentaid.gov/resources" target="_blank" className={'btn btn-state'} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Financial Aid Resources</motion.a>
            </div>
        </div>
    );
}

export default Result;
