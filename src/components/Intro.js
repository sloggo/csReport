import {motion, transform} from 'framer-motion'
import React, {useState, useEffect} from 'react'
import LanguageSpindle from './LanguageSpindle';

export default function Intro(){
    const [moved, setMoved] = useState(false);

    useEffect(() => {
        setTimeout(toggleMoved, 2000)
    }, [])

    function toggleMoved(){
        setMoved(!moved);
    }

    return(
        <a id='home'>
            <div className="intro-container">
                <div className="intro-textbox-container">
                    <motion.div layout className="intro-textbox" data-moved={moved}>

                        <motion.div layout className='intro-text-container'>
                            <motion.h1  className="intro-text"
                                initial={{y:101}} animate={{y:0}} transition={{duration:.5}}>
                                2023
                            </motion.h1>
                        </motion.div>

                        <motion.div  layout className='intro-text-container'>
                            <motion.h1 className="intro-text"
                                initial={{y:101}} animate={{y:0}} transition={{duration:.5, delay:.6}}>
                                Computer Science,
                            </motion.h1>
                        </motion.div>

                        <motion.div layout className='intro-text-container'>
                            <motion.h1  className="intro-text"
                                initial={{y:101}} animate={{y:0}} transition={{duration:.5, delay:1.2}}>
                                <span className='intro-text-highlight'>Project</span>
                            </motion.h1>
                        </motion.div>

                    </motion.div>
                </div>

                <div className="intro-image-container">
                    <motion.img initial={{opacity: 0, scale:0}} animate={{opacity:1, scale:1}} transition={{delay:2.2, duration:.7}} className='intro-image' src='.\unologo.png'></motion.img>
                </div>
            </div>
        </a>
    )
}