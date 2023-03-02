import {motion, transform} from 'framer-motion'
import LanguageSpindle from './LanguageSpindle'

export default function AboutMe(){
    return(
        <a id='aboutme'>
            <div className="aboutme-container">
                <motion.h1 className="aboutme-title" initial={{y:100, scale:0.5}} whileInView={{y:0, scale:1}} viewport={{once: true}}>What were my initial ideas?</motion.h1>

                <LanguageSpindle></LanguageSpindle>

                <motion.div initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity:1}} transition={{staggerChildren: 1}} className='aboutme-card-container'>

                    <motion.div initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity:1}} className='aboutme-card'>
                        <h2 className='aboutme-card-header'>UNO</h2>
                        <ul>
                            <li style={{textAlign: "center"}}>Round based card game, using own unique deck</li>
                            <li style={{textAlign: "center"}}>Family Oriented</li>
                            <li style={{textAlign: "center"}}>2+ players but 4 is reccommended</li>
                            <li style={{textAlign: "center"}}>Special cards (plus fours, wild, skip, reverse)</li>
                            <li style={{textAlign: "center"}}>Wild cards and plus fours allow you to change colour</li>
                            <li style={{textAlign: "center"}}>Can only play cards that are of similar colour or number to the last card played </li>
                            <li style={{textAlign: "center"}}>Reverse direction card can change the direction of flow of play </li>
                            <li style={{textAlign: "center"}}>Skip card can skip the next player </li>
                            <li style={{textAlign: "center"}}>House rules can change rules of the game (stacking)</li>
                        </ul>
                    </motion.div>

                    <motion.div initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity:1}} className='aboutme-card'>
                        <h2 className='aboutme-card-header'>Blackjack</h2>
                        <ul>
                            <li style={{textAlign: "center"}}>Round based card game, using regular deck of cards</li>
                            <li style={{textAlign: "center"}}>1v1 duelling style</li>
                            <li style={{textAlign: "center"}}>Guessing/gambling game</li>
                            <li style={{textAlign: "center"}}>Number cards have face value</li>
                            <li style={{textAlign: "center"}}>King, Queen, Joker are worth 10</li>
                            <li style={{textAlign: "center"}}>Ace can be either a one or a 10</li>
                            <li style={{textAlign: "center"}}>Get as close to 21 as possible without going above</li>
                            <li style={{textAlign: "center"}}>Every player only has two cards</li>
                            <li style={{textAlign: "center"}}>Closest player on or around 21 wins</li>
                        </ul>
                    </motion.div>

                    <motion.div initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity:1}} className='aboutme-card'>
                        <h2 className='aboutme-card-header'>Monopoly</h2>
                        <ul>
                            <li style={{textAlign: "center"}}>Board game based on dice rolls</li>
                            <li style={{textAlign: "center"}}>Family Oriented</li>
                            <li style={{textAlign: "center"}}>2+ players but 4 is reccommended</li>
                            <li style={{textAlign: "center"}}>Monetary based</li>
                            <li style={{textAlign: "center"}}>Winner wins when every other player goes bankrupt</li>
                            <li style={{textAlign: "center"}}>Chance cards spice up the gameplay</li>
                            <li style={{textAlign: "center"}}>Houses and Hotels allow you to gain a "monopoly"</li>
                            <li style={{textAlign: "center"}}>Relies on currency management</li>
                        </ul>
                    </motion.div>

                </motion.div>
            </div>
        </a>
    )
}