import {motion, transform} from 'framer-motion'
import React, {useState, useEffect} from 'react'

export default function LanguageSpindle(){
    const spindleTime = 3000;
    const [spindleCount, setSpindleCount] = useState(0)

    const [items, setItems] = useState([
        {
            id: 'uno',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/UNO_Logo.svg/2560px-UNO_Logo.svg.png',
            layout: true
        },
        {
            id: 'blackjack',
            src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ad0fa87e-0fa4-4b6e-b1c3-e31271c25be2/d6ibf1c-07d45329-f934-420e-9242-e5c5c6e285d7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FkMGZhODdlLTBmYTQtNGI2ZS1iMWMzLWUzMTI3MWMyNWJlMlwvZDZpYmYxYy0wN2Q0NTMyOS1mOTM0LTQyMGUtOTI0Mi1lNWM1YzZlMjg1ZDcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pEd9a8eOIgalOd2J4UiHE-u7V2GesxdgLedlx9OjrRE",
            layout: true
        },
        {
            id: 'monopoly',
            src: 'https://www.stakefans.com/wp-content/uploads/monopoly-live-logo.png',
            layout: true
        }
    ])

    function spinSpindle(){
        let newItems = [...items]

        const itmToMove = {...newItems[0]};
        const nextToMove = {...newItems[1]};

        newItems.splice(0, 1)
        itmToMove.layout = true;
        newItems.push(itmToMove)

        nextToMove.layout = false;
        newItems.splice(0, 1, nextToMove)

        setItems(newItems)
    }


    useEffect(() => {
        const interval = setInterval(() => {
          setSpindleCount( (prev) => prev+1 )
        }, spindleTime);
      
        return () => clearInterval(interval);
      }, []);

    useEffect(() => {
        spinSpindle()
    }, [spindleCount]);

    return(
        <div className='spindle-container'>
            <h2 className='spindle-title'>GAME IDEAS</h2>

            <motion.div className='lang-item-container'>
                {items.map( (item, itemIndex) => {
                    if(itemIndex === 1){
                        return <motion.img layout={item.layout} key={item.id} src={item.src} className='lang-item mid'></motion.img>
                    } else {
                        return <motion.img layout={item.layout} transition={{layout: {duration:0.2}}}key={item.id} src={item.src} className='lang-item'></motion.img>
                    }
                })}
            </motion.div>
        </div>
    )
}