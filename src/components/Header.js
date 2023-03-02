import {animate, motion} from 'framer-motion'
import React, {useEffect, useState} from 'react';

export default function Header(){
  
    return(
        <header className='web-header'>
            <h2 className='header-logo'>Josh Sloggett</h2>

            <ul className='nav-container'>
                <li data-current='true'><a href='#home'>Home</a></li>
                <li><a href='#aboutme'>About Me</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </header>
    )
}