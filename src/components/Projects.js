import {filterProps, motion} from 'framer-motion'
import Project from './Project'
import React, {useState} from 'react'
import projectData from '../projectData.json'

export default function Projects(props){
    const [projects, setProjects] = useState(projectData)

    return(
            <div className="projects-section-container">
                <h1 className="aboutme-title">Here are some existing solutions;</h1>

                <a id="projects">
                    <div className="projects-container">
                        {projects.map((item, itemIndex) => <Project cursorState={props.cursorState} project={item}  multiplier={(itemIndex+1) *.5}></Project>)}
                    </div>
                </a>
                
                <h1 className="aboutme-title">What will my solution include?</h1>
            </div>
    )
}