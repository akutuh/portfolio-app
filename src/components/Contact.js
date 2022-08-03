import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-grid-container">
        <div className="item0">
          <h2>contact me</h2>
        </div>
        <div className="item1">
          <input className="inputbox" placeholder="Name"></input>
        </div>
        <div className="item2">
          <input className="inputbox" placeholder="Email"></input>
        </div>
        <div className="item3">
          <input className="inputbox" placeholder="Subject"></input>
        </div>
        <div className="item4">
          <input className="inputbox" placeholder="Phone"></input>
        </div>
        <div className="item5">
          <form>
            <textarea className="inputboxtext" cols="80" rows="10"></textarea>
          </form>
        </div>
        <div className="item6">
          <button className="contactbutton">submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
