import {motion} from 'framer-motion'
import LanguageIcon from './LanguageIcon'

export default function Project(props){
    return(
        <motion.div animate={{rotateY:Math.abs(props.cursorState.pageX * 0.01), rotateX:Math.abs(props.cursorState.pageY *0.01)}} className="project">
            <motion.img className="project-preview" src={props.project.img}></motion.img>

            <div className='project-text'>
                <h1 className='project-title'>{props.project.title}</h1>
                <p className='project-desc'>{props.project.desc}</p>
                <ul>
                    {props.project.features.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
                
            </div>
        </motion.div>
    )
}