import {filterProps, motion} from 'framer-motion'
import Project from './Project'
import React, {useState} from 'react'
import projectData from '../projectData.json'
import mainImg from '../assets/main.png'
import boardImg from '../assets/board.png'

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
                            <br></br>
                            <div className='fifty-fifty-container'>
                                <img src={mainImg} className='flowchart'></img>
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
                            <br></br>

                            <h2>Board Component Flowchart</h2>
                            <br></br>
                            <div className='fifty-fifty-container'>
                                <img src={boardImg} className='flowchart'></img>
                                <div>
                                    <p>The board will start by initiating all states needed with values from the main menu selection.</p>
                                    <p>It will create the player objects and begin the game by allowing the first player to play.</p>
                                    <p>The first card will be selected randomly from the colour cards in the deck.</p>
                                    <p>Inputs such as a player’s played card will also be validated using a custom card validation algorithm to ensure the game is fair for everyone.</p>
                                    <p>This algorithm will check if there is either a matching colour or a matching number, or if the card is a wild/plus four.</p>
                                    <p>When a skip or plus four is played the next player’s skip property is enabled, skipping their turn, and/or making them pick up 4 or 2.</p>
                                    <p>Bots will play by collecting all available moves, then selecting a card randomly.</p>
                                    <p>For choosing colour on wild and plus four, Bots will count the frequency of each colour and choose the colour with the most frequency, to mimic how a human would choose the colour.</p>
                                </div>
                            </div>
                            
                            <br></br>
                            <br></br>

                            <h2>Data Analysis</h2>
                            <br></br>
                            <p>The live data will then be logged to an array, each card played, and each winner of each game, along with the length of each game, then finding the mean.</p>
                            <p>This data will then be formatted to allow ChartJS to graph the data, by filtering the coloured cards to graph the frequency of each colour, and by filtering the number face of each card.</p>
                            <p>Abstraction will be used to remove irrelevant data such as card images, to clear up data to allow the dataGrapher to graph the data easier.</p>
                            <p>This data will allow me to test hypotheses by changing variables such as number of players and number of starting cards and test if this data changes the length and/or winners of the game.</p>
                            <p>The graphs and the game will be played in real-time allowing the user to watch the data being logged and recorded.</p>
                    </div>
                </a>
            </div>
    )
}