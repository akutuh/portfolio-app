import React from 'react'
import '../styles/Projects.css'
import alarm from '../../public/alarm.png'

const Projects = () => {
  return (
    <div id="projects">
      <div className="grid-container">
        <div className="grid-item">
          <img src={alarm} />
        </div>
        <div className="grid-item">
          <img src={alarm} />
        </div>
        <div className="grid-item">
          <img src={alarm} />
        </div>
        <div className="grid-item">
          <img src={alarm} />
        </div>
      </div>
    </div>
  )
}

export default Projects
