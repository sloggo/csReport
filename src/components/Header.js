import {animate, motion} from 'framer-motion'
import React, {useEffect, useState} from 'react';

export default function Header(){
  
    return(
        <header className='web-header'>
            <h2 className='header-logo'>Exam No. 123734</h2>

            <ul className='nav-container'>
                <li data-current='true'><a href='#home'>Meeting the Brief</a></li>
                <li><a href='#investigation'>Investigation</a></li>
                <li><a href='#planning'>Planning</a></li>
                <li><a href='#design'>Design</a></li>
                <li><a href='#implementation'>Implementation</a></li>
                <li><a href='#testing'>Testing</a></li>
                <li><a href='#evaluation'>Evaluation</a></li>
            </ul>
        </header>
    )
}