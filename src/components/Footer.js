import React from 'react'
import '../styles/Footer.css'
import gitsm from '../../public/githubsmall.png'
import LiLogo from '../../public/linkedinlogo.png'

const Footer = () => {
  return (
    <div className="footer-flex-container">
      <div className="footer-flex-item">2022 Aku Tuhkanen</div>
      <div className="footer-flex-item">
        <form>
          <button
            className="footer-flex-button"
            formAction="https://github.com/akutuh"
          >
            <img className="logo" src={gitsm} alt="github logo"></img>
          </button>
        </form>
      </div>
      <div className="footer-flex-item">
        <form>
          <button
            className="footer-flex-button"
            formAction="https://www.linkedin.com/in/akutuhkanen/"
          >
            <img className="logo" src={LiLogo} alt="linkedin logo"></img>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Footer
