import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div>
      <h2>contact me</h2>
      <div id="contact" className="grid-container">
        <div className="grid-item">
          <input placeholder="Name"></input>
        </div>
        <div className="grid-item">
          <input placeholder="Email"></input>
        </div>
        <div className="grid-item">
          <input placeholder="Subject"></input>
        </div>
        <div className="grid-item">
          <input placeholder="Phone"></input>
        </div>
      </div>
      <div className="textbox">
        <input></input>
      </div>
      <div>
        <button>send</button>
      </div>
    </div>
  )
}

export default Contact
