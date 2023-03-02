import {motion, transform} from 'framer-motion'
import LanguageSpindle from './LanguageSpindle'

export default function AboutMe(){
    return(
        <a id='aboutme'>
            <div className="aboutme-container">
                <motion.h1 className="aboutme-title" initial={{y:100, scale:0.5}} whileInView={{y:0, scale:1}} viewport={{once: true}}>Here's a little about me;</motion.h1>

                <LanguageSpindle></LanguageSpindle>

                <motion.div initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity:1}} transition={{staggerChildren: 1}} className='aboutme-card-container'>

                    <motion.div initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity:1}} className='aboutme-card'>
                        <h2 className='aboutme-card-header'>Who am I?</h2>
                        <p>Placeholder</p>
                    </motion.div>

                    <motion.div initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity:1}} className='aboutme-card'>
                        <h2 className='aboutme-card-header'>Skills</h2>
                        <p>Placeholder</p>
                    </motion.div>

                    <motion.div initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity:1}} className='aboutme-card'>
                        <h2 className='aboutme-card-header'>Skills</h2>
                        <p>Placeholder</p>
                    </motion.div>

                </motion.div>
            </div>
        </a>
    )
}