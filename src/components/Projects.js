import React from 'react'
import '../styles/Projects.css'
import alarm from '../../public/alarm.png'
import blog from '../../public/blogapp.png'

const Projects = () => {
  const onButtonClick = (event) => {
    location.href = event.target.value
  }
  return (
    <div id="projects">
      <div className="projects-grid-container">
        <div className="project-item">
          <img src={alarm} className="image" />
          <h2>Clock App</h2>
          <div className="button-container">
            <button className="button">Live Demo</button>
            <button className="button">Github</button>
          </div>
        </div>
        <div className="project-item">
          <img src={alarm} className="image" />
          <h2>Clock App</h2>
          <div className="button-container">
            <button className="button">Live Demo</button>
            <button className="button">Github</button>
          </div>
        </div>
        <div className="project-item">
          <img src={blog} className="image" />
          <h2>Blog App</h2>
          <div className="button-container">
            <button
              value="https://young-sea-17352.herokuapp.com/"
              className="button"
              onClick={onButtonClick}
            >
              Live Demo
            </button>
            <button
              value="https://github.com/akutuh/fullstackmooc-osa5"
              className="button"
              onClick={onButtonClick}
            >
              Github
            </button>
          </div>
        </div>
        <div className="project-item">
          <img src={alarm} className="image" />
          <h2>Clock App</h2>
          <div className="button-container">
            <button
              value="https://lit-shelf-09682.herokuapp.com/"
              className="button"
              onClick={onButtonClick}
            >
              Live Demo
            </button>
            <button
              value="https://github.com/akutuh/alarm-clock"
              className="button"
              onClick={onButtonClick}
            >
              Github
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
