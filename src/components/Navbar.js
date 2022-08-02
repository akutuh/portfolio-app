import React from 'react'
import LiLogo from '../../public/linkedin.png'
import GitHubLogo from '../../public/github-logo.png'
import '../styles/Navbar.css'

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <a href="https://www.linkedin.com/in/akutuhkanen/">
          <img className="logo" src={LiLogo} alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/akutuh">
          <img className="logo" src={GitHubLogo} alt="github logo" />
        </a>
        <a className="text">about me</a>
        <a className="text">contact</a>
      </div>
    </div>
  )
}

export default NavBar
