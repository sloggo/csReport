import {motion} from 'framer-motion'
import Header from './components/Header'
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import MySolution from './components/MySolution'
import { useEffect, useState } from 'react';

function App() {
  const [cursorState, setCursorState] = useState({
    pageX: 0,
    pageY: 0
  })

  useEffect( ()=>{
    document.addEventListener('mousemove', (e) =>{
      if(e.screenX > 0 && e.screenY > 0){
        setCursorState({pageX:Math.abs(e.screenX), pageY:Math.abs(e.screenY)})
      }
    })
  }, [])

  return (
    <div className='App'>
      <Header />
      <Intro />
      <AboutMe />
      <Projects cursorState={cursorState}/>
      <MySolution></MySolution>
    </div>
  );
}

export default App;
