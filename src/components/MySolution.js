import {motion, transform} from 'framer-motion'
import LanguageSpindle from './LanguageSpindle'

export default function AboutMe(){
    return(
        <a id='planning'>
            <div className="aboutme-container">

                <motion.div initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity:1}} transition={{staggerChildren: 1}} className='aboutme-card-container'>

                    <motion.div initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity:1}} className='aboutme-card-full'>
                        <h2 className='aboutme-card-header'>UNO</h2>
                        <ul>
                            <li style={{textAlign: "center"}}>Uno game – selected due to simplicity yet still complicated algorithmic rules such as skipping, reversing, in my opinion the perfect balance of simplicity with ability to expand. </li>
                            <li style={{textAlign: "center"}}>Ranging from 2-8 players</li>
                            <li style={{textAlign: "center"}}>Traditional UNO rules (no stacking plus fours/twos) </li>
                            <li style={{textAlign: "center"}}>Statistics will allow enthusiasts to track the frequency of colours, number cards and game lengths. </li>
                            <li style={{textAlign: "center"}}>Single player will have one player object playing against up to 7 bots </li>
                            <li style={{textAlign: "center"}}>Multiplayer will have two player objects playing against up to 6 bots.  </li>
                            <li style={{textAlign: "center"}}>Simulation will have up to 8 bots, with options for starting number of cards and number of games to track data for. </li>
                            <li style={{textAlign: "center"}}>Game system will track card data and graph it live alongside the game. Will not include online multiplayer, local only. </li>
                            <li style={{textAlign: "center"}}>Uno will be called when a player is on one card left, player will have 5 seconds to click UNO! To alert others of their uno, if they manage to get rid of all their cards, the game will end with a winning screen, showing the final statistics of the game. </li>
                        </ul>
                    </motion.div>

                </motion.div>
            </div>
        </a>
    )
}