import React, { useState } from 'react'
import '../styles/Contact.css'

const Contact = ({ createInfo }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [phone, setPhone] = useState('')
  const [text, setText] = useState('')

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleSubject = (event) => {
    setSubject(event.target.value)
  }

  const handlePhone = (event) => {
    setPhone(event.target.value)
  }

  const handleText = (event) => {
    setText(event.target.value)
  }

  const sendInfo = (event) => {
    event.preventDefault()
    createInfo({
      name: name,
      email: email,
      subject: subject,
      phone: phone,
      text: text,
    })
    setName('')
    setEmail('')
    setSubject('')
    setPhone('')
    setText('')
  }

  return (
    <div id="contact">
      <form onSubmit={sendInfo} className="contact-grid-container">
        <div className="item0">
          <h2>contact me</h2>
        </div>
        <div className="item1">
          <input
            value={name}
            className="inputbox"
            placeholder="Name"
            onChange={handleName}
          ></input>
        </div>
        <div className="item2">
          <input
            value={email}
            className="inputbox"
            placeholder="Email"
            onChange={handleEmail}
          ></input>
        </div>
        <div className="item3">
          <input
            value={subject}
            className="inputbox"
            placeholder="Subject"
            onChange={handleSubject}
          ></input>
        </div>
        <div className="item4">
          <input
            value={phone}
            className="inputbox"
            placeholder="Phone"
            onChange={handlePhone}
          ></input>
        </div>
        <div className="item5">
          <textarea
            value={text}
            className="inputboxtext"
            placeholder="..."
            onChange={handleText}
          ></textarea>
        </div>
        <div className="item6">
          <button type="submit" className="contactbutton">
            submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
