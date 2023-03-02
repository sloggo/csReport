import {animate, motion} from 'framer-motion'
import React, {useEffect, useState} from 'react';

export default function Header(){
  
    return(
        <header className='web-header'>
            <h2 className='header-logo'>Exam No. 123734</h2>

            <ul className='nav-container'>
                <li data-current='true'><a href='#home'>Meeting the Brief</a></li>
                <li><a href='#invesigation'>Investigation</a></li>
                <li><a href='#invesigation'>Planning</a></li>
                <li><a href='#projects'>Design</a></li>
                <li><a href='#projects'>Implementation</a></li>
                <li><a href='#projects'>Testing</a></li>
                <li><a href='#contact'>Evaluation</a></li>
            </ul>
        </header>
    )
}