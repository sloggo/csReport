import {filterProps, motion} from 'framer-motion'
import Project from './Project'
import React, {useState} from 'react'
import projectData from '../projectData.json'

export default function Design(props){
    return(
            <div className="projects-section-container">
                <a id='design'>
                    <h1 className="aboutme-title">Design;</h1>

                    <div className="design-container">
                            <p>Using React and HTML, I will create an interactive UNO game in the form of a website.</p>
                            <p>The user will be presented with options and will be able to play a classic game of UNO from start to finish, with mechanics such as skip cards, plus fours, wild cards and reverses, along with an UNO call mechanic just like the real game.</p>
        
                            <br></br>
                            <h2>Main Menu Flowchart</h2>
                            <div className='fifty-fifty-container'>
                                <img src='/assets/main.png'></img>
                                <div>
                                    <p>A state called currentTab will control the state of the menu, changing the options to suit the current mode selected.</p>
                                    <p>There will be single player, 1v1 multiplayer and a simulation mode, all with live graphed data from the current game being played using ChartJS.</p>
                                    <p>Users will input their preference on number of players, number of starting cards and their name and this data will be validated using algorithms before it is used.</p>
                                    <p>For each numerical input there will be a html input type number which only allows the user to input a numerical value between two specified values, ensuring data taken from player is correct.</p>
                                    <p>If no data is inputted, default values will be used. For playerNum the minimum will be 4 players, the max will be 8.</p>
                                    <p>For the number of starting cards, the minimum will be 3 and the max will be 15. After inputting their preferences, the begin button will summon the board component;</p>
                                </div>
                            </div>

                            <br></br>
                            <h2>Board Component Flowchart</h2>
                            <div className='fifty-fifty-container'>
                                <img src='/assets/main.png'></img>
                                <div>
                                    <p>A state called currentTab will control the state of the menu, changing the options to suit the current mode selected.</p>
                                    <p>There will be single player, 1v1 multiplayer and a simulation mode, all with live graphed data from the current game being played using ChartJS.</p>
                                    <p>Users will input their preference on number of players, number of starting cards and their name and this data will be validated using algorithms before it is used.</p>
                                    <p>For each numerical input there will be a html input type number which only allows the user to input a numerical value between two specified values, ensuring data taken from player is correct.</p>
                                    <p>If no data is inputted, default values will be used. For playerNum the minimum will be 4 players, the max will be 8.</p>
                                    <p>For the number of starting cards, the minimum will be 3 and the max will be 15. After inputting their preferences, the begin button will summon the board component;</p>
                                </div>
                            </div>
                    </div>
                </a>
            </div>
    )
}