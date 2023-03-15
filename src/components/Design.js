import {filterProps, motion} from 'framer-motion'
import Project from './Project'
import React, {useState} from 'react'
import projectData from '../projectData.json'
import mainImg from '../assets/main.png'
import boardImg from '../assets/board.png'
import cardObjImg from '../assets/card-object.png'
import validateCardImg from '../assets/validate-card-image.png'
import systemArchImage from '../assets/system-architecture.png'


export default function Design(props){
    return(
            <div className="projects-section-container">
                <a id='design'>
                    <h1 className="aboutme-title">Design;</h1>

                    <div className="design-container">
                            <p>Using React and HTML, I will create an interactive UNO game in the form of a website.</p>
                            <p>The user will be presented with options and will be able to play a classic game of UNO from start to finish, with mechanics such as skip cards, plus fours, wild cards and reverses, along with an UNO call mechanic just like the real game.</p>
        
                            <br></br>
                            <img src={systemArchImage} className='flowchart'></img>    
                            <br></br> 

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

                <br></br>

                <a id='implementation'>
                    <h1 className="aboutme-title">Implementation;</h1>

                    <div className="design-container">
                            <p>For my own implementation of an UNO game, I decided to create my game based in HTML and React. </p>
                            <p>The system architecture of this game hinges on 2 main components; the board and the player deck. Each of these components pass through information and functions through each other to make a modular, easy to read codebase. Using decomposition works great with this style of modular programming. </p>
                            <p>The first step was to create the board component, this is the component that handles the base deck the game will use, the current card and keeping track of player statuses (their go?, skipped?, bot? etc.). To start I created a JSON file with all possible UNO cards, to keep track of what card does what. </p>
        
                            <br></br>
                            <h2>Card Object</h2>
                            <br></br>
                            <img src={cardObjImg} style={{width: "100%"}}></img>
                            <p>This helps with the logic later, of creating functions depending on what type of card is played and by who. </p>
                            <br></br>
                            <p>After that, I created the player components depending on how many players, consisting of a deck array which initializes itself by choosing 9 random cards from the deck. It also created a state variable to let the component know whether this player was a bot, (auto move) or a player (player inputs), allowing for single player, multiplayer and simulation modes. </p>

                            <br></br>
                            <br></br>

                            <div className='fifty-fifty-container'>
                                <img src={validateCardImg} style={{width: "300%"}}></img>
                                <div>
                                    <p>The board will start by initiating all states needed with values from the main menu selection.</p>
                                    <p>It will create the player objects and begin the game by allowing the first player to play.</p>
                                    <p>The first card will be selected randomly from the colour cards in the deck.</p>
                                    <p>Inputs such as a player’s played card will also be validated using a custom card validation algorithm to ensure the game is fair for everyone.</p>
                                    <p>This algorithm will check if there is either a matching colour or a matching number, or if the card is a wild/plus four.</p>
                                    <p>When a skip or plus four is played the next player’s skip property is enabled, skipping their turn, and/or making them pick up 4 or 2.</p>
                                </div>
                            </div>

                            <p>Bots will play by collecting all available moves, then selecting a card randomly.</p>
                            <p>For choosing colour on wild and plus four, Bots will count the frequency of each colour and choose the colour with the most frequency, to mimic how a human would choose the colour.</p>

                            <p>As mentioned before, we can check if the player is a bot. Using this, I created a simple algorithm to allow the bot to make a move on their turn, by gathering all possible moves and selecting a random one. This allowed the game to function, along with a function to allow the board component to move to the next player. </p>
                            <br></br>
                            <p>But what happens when you don’t have a valid card to play? The pickUp() function allows you to pick up a random card and skip your go. I also allowed the bot to make this move if they had no other valid moves. </p>
                            <br></br>
                            <p>One of the biggest challenges was to implement was the skipping player functionality. Using the board component to enable a skip property on each player and check for that property on every player's turn, skipping the turn if it was true, I was able to use decomposition and abstraction along with pattern matching to solve it. </p>
                            <br></br>
                            <p>Another challenging piece of functionality was the plus four and plus two cards, to do this, I allowed an attribute in the pickup function to allow a user to pick up any number of cards. Using the plusNum attribute on these types of cards, I was able to check the attribute on played cards and if it had one, force the next user to pick up 2 or 4 cards. This was paired with a UI functionality to choose a colour for plus four and wild cards. This was also implemented into the bot algorithm</p>
                            <p>After that, a data formatting and graphing component was created to update the stastics everytime a card is played, using absraction to remove irrelevant data such as card image. This data was then graphed using ChartJs to test hypotheses as stated in “Meeting the Brief”. </p>
                            
                            <br></br>
                            <br></br>
                    </div>
                </a>

                <a id='testing'>
                    <h1 className="aboutme-title">Testing;</h1>

                    <div className="design-container">
                            <p>Once each algorithm was completed, a basic test case table was created. Each algorithm was unit tested with a range of values, expected outputs and real outputs.</p>
                            <p>Due to word limits, here are a few test case tables along with their respective function. It also includes any issues encountered with yellow stars with an explanation as to what the issue was and how I went about fixing it.</p>
        
                            <br></br>
                            <h2>validateCard()</h2>
                            <br></br>
                            <img src={validateCardImg} style={{width: "100%"}}></img>
                            <p>The aim of this function is to validate whether the card played is a valid move or not, depending on the current card and owner of the specified card.</p>
                            <br></br>
                            <p>After that, I created the player components depending on how many players, consisting of a deck array which initializes itself by choosing 9 random cards from the deck. It also created a state variable to let the component know whether this player was a bot, (auto move) or a player (player inputs), allowing for single player, multiplayer and simulation modes. </p>

                            <br></br>
                            <br></br>

                            <div className='fifty-fifty-container'>
                                <img src={validateCardImg} style={{width: "300%"}}></img>
                                <div>
                                    <p>The board will start by initiating all states needed with values from the main menu selection.</p>
                                    <p>It will create the player objects and begin the game by allowing the first player to play.</p>
                                    <p>The first card will be selected randomly from the colour cards in the deck.</p>
                                    <p>Inputs such as a player’s played card will also be validated using a custom card validation algorithm to ensure the game is fair for everyone.</p>
                                    <p>This algorithm will check if there is either a matching colour or a matching number, or if the card is a wild/plus four.</p>
                                    <p>When a skip or plus four is played the next player’s skip property is enabled, skipping their turn, and/or making them pick up 4 or 2.</p>
                                </div>
                            </div>

                            <p>Bots will play by collecting all available moves, then selecting a card randomly.</p>
                            <p>For choosing colour on wild and plus four, Bots will count the frequency of each colour and choose the colour with the most frequency, to mimic how a human would choose the colour.</p>

                            <p>As mentioned before, we can check if the player is a bot. Using this, I created a simple algorithm to allow the bot to make a move on their turn, by gathering all possible moves and selecting a random one. This allowed the game to function, along with a function to allow the board component to move to the next player. </p>
                            <br></br>
                            <p>But what happens when you don’t have a valid card to play? The pickUp() function allows you to pick up a random card and skip your go. I also allowed the bot to make this move if they had no other valid moves. </p>
                            <br></br>
                            <p>One of the biggest challenges was to implement was the skipping player functionality. Using the board component to enable a skip property on each player and check for that property on every player's turn, skipping the turn if it was true, I was able to use decomposition and abstraction along with pattern matching to solve it. </p>
                            <br></br>
                            <p>Another challenging piece of functionality was the plus four and plus two cards, to do this, I allowed an attribute in the pickup function to allow a user to pick up any number of cards. Using the plusNum attribute on these types of cards, I was able to check the attribute on played cards and if it had one, force the next user to pick up 2 or 4 cards. This was paired with a UI functionality to choose a colour for plus four and wild cards. This was also implemented into the bot algorithm</p>
                            <p>After that, a data formatting and graphing component was created to update the stastics everytime a card is played, using absraction to remove irrelevant data such as card image. This data was then graphed using ChartJs to test hypotheses as stated in “Meeting the Brief”. </p>
                            
                            <br></br>
                            <br></br>
                    </div>
                </a>
            </div>
    )
}