import React, { useEffect, useContext, useState } from "react";
import { FormContext } from '../contexts/FormContexts'
import { useValues } from '../contexts/SchoolContext'
import { motion } from "framer-motion";
import '../pages.css'
import CountUp from 'react-countup';
//Result is the final page
function Result() {
    //context variables
    const universities = useValues();
    const { dropdownItem, aidAmt, state } = useContext(FormContext);
    const [choice] = dropdownItem
    const [aidInput] = aidAmt
    const [stateStatus] = state;
    const [phrase, setPhrase] = useState("meh");
    
    //local state variables
    const [score, setScore] = useState(0);
    const [colorIntensity, setColorIntensity] = useState(35)
    const negativeColor = ['rgba(266, 1, 1, 0.7)',`rgba(${266 + colorIntensity * 2}, 1, 1, 1)`];
    const positiveColor = ['hsla(119, 99%, 22%, 1)','hsla(119, 99%, 62%, 1)']
    function colorProgression(){
        return colorIntensity>0 ? positiveColor :
        negativeColor
    }

    //Functions
    
    
    const shorten = universities.filter((university) => 
        university.INSTNM.length < 40
    );
    const filteredData = shorten.find((shortenUni) => {
        return shortenUni.INSTNM.includes(choice)
    }

    );


    const inStateTuition = filteredData.TUITIONFEE_IN;
    const outStateTuition = filteredData.TUITIONFEE_OUT;
    const schoolWebsite = filteredData.INSTURL;

    useEffect(() => {
            calculateScore();

        // eslint-disable-next-line
      }, []);
    //Calculate score based on a point system. weightings are based on percentage of financial aid given out by different types 
    //of institutions. 
    const calculateScore = () => {
        let points = 0;
        //Point total will be 100. Two factors will determine points: total net tuition to be paid and % difference between your net tuition and the national average.
        
        //Two different main conditionals will be run: public in state and public out of state. If the university is a private
        //University, the users score will be divided by 0.95 at the end. 

        //In-state
        if(stateStatus===0){

            function getVal(){
                return (inStateTuition - aidInput < 500) ? 95  
               : (inStateTuition - aidInput < 5000) ? 80 
                 : (inStateTuition - aidInput < 15000) ?  50
                : (inStateTuition - aidInput < 25000) ?  40
                :(inStateTuition - aidInput < 35000) ? -30
                :(inStateTuition - aidInput < 40000) ?  -35:
                 -50

            }

            points += getVal();
  
        } else{
            function getValOut(){
                return (outStateTuition - aidInput < 500) ? 90  
               : (outStateTuition - aidInput < 5000) ? 70
                 : (outStateTuition - aidInput < 15000) ?  40
                : (outStateTuition - aidInput < 25000) ?  30
                :(outStateTuition - aidInput < 35000) ? -10
                :(outStateTuition - aidInput < 35000) ?  -40:
                 -60

            }
            points += getValOut();
            

        }
        console.log(points)

        //Set phrases and score value

        //The boldness of the color will be determined by how
        //Much of an outlier the individual score is.
        setColorIntensity(points -35);
        setScore(points)
        if(points >= 85){
            setPhrase('Excellent')
        } else if(points >= 65){
            setPhrase('Good')

        }else if(points >= 50){
            setPhrase('Ok')

        }else if(points >= 35){
            setPhrase('Meh')
        }else if(points >= 10){
            setPhrase('Bad')
        }else if(points >= -15){
            setPhrase('Yikes')

        }else if(points >= -35){
        } else{

        }


    }

    const variants={
        //All framer motion elements will initially be off the screen w/ 0 opacity
        initial:{
            x:'-50%',
            opacity:0
        },
        initialSpring:{
            y:200,
            opacity:0
        },
        exit:{
            y: '-300px',
             opacity: 0,
           
        }
    }

    return (
            <div className="result-container">


                <motion.div 
                    variants={variants}
                    initial={{ x:'-50%',
                    opacity:0,
                }}
                    animate={{
                        color:colorProgression(), 
                        x:0,
                        opacity:1
                    }}
                    className='score-container'
                    transition={{
                        duration: 3,
                        ease: "easeOut",
                    }}
                    exit="exit"
                    > 
                    <CountUp delay={1} start={0} end={score}  duration={3}
                    suffix="/100" >
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} className='score'/>
                            </div>
                        )}
                    </CountUp>

              
                        
                        <h1 className="headline-small" style={{marginTop:0}}>"{phrase}"</h1> 
                </motion.div>
                    <motion.div  variants={variants}
                        initial="initialSpring"
                        animate={{
                            y:0,
                            opacity:1
                        }}
                        className='fade-rule'
                        transition={{
                            delay: 0.5, duration: 0.7, type: "spring" 
                        }}
                        exit="exit" 
                    />  
                    <h1 className="headline-small info-headline">{choice}</h1>
                    <motion.div variants={variants} initial="initialSpring"
                        animate={{
                            y:0,
                            opacity:1
                        }}
                        className='info-container'
                        transition={{
                            delay: 0.5, duration: 0.7, type: "spring" 
                        }}
                        exit="exit" >
                        <span>
                            <div>
                                Tuition Per Year (Before Aid):&nbsp;
                                <span className="resultValue">$
                               {stateStatus === "0"
                                      ? inStateTuition.toLocaleString()
                                     : outStateTuition.toLocaleString()}
                                </span>
                            </div>
                        </span>
                        <span>
                            <div>
                                Your Net Price:&nbsp;
                                <span className="resultValue"> $
                                {stateStatus === "1"
                                      ? (outStateTuition - aidInput).toLocaleString()
                                     : (inStateTuition - aidInput).toLocaleString()}
                                </span>
                            </div>
                        </span>
                        <span>
                            <div>
                                Average Net Price (Public, {stateStatus===1 ?  (<div> Out of State): <span className="resultValue">$27,020</span></div> ) : (<div> In State): <span className="resultValue">$10,560</span></div> )} 
                                                            </div>
                            <div>
                                Average Net Price (Private): <span className="resultValue">$37,650 </span> 
                               
                                    {/* // ? inStateTuition.toString()
                                    // : outStateTuition.toString()} */}
                            </div>
                        </span>
                     </motion.div>
                     <motion.div  variants={variants}
                        initial="initialSpring"
                        animate={{
                            y:0,
                            opacity:1
                        }}
                        className='fade-rule'
                        transition={{
                            delay: 0.5, duration: 0.7, type: "spring" 
                        }}
                        exit="exit" 
                    />  
                     <div className="result-buttons">

                     <motion.a
                        
                        href={`https://${schoolWebsite}`}
                        target="_blank"

                        className={'btn btn-state'}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                       
                    >
                        School Website
                    </motion.a>
                    <motion.a
                        href={'https://studentaid.gov/resources'}
                        target="_blank"
                        type="submit"
                        className={'btn btn-state'}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                       
                    >
                        Financial Aid Resources
                    </motion.a>
 

                     </div>
                    
            </div>
    )
}

export default Result
