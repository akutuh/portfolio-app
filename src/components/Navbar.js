import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import LiLogo from '../../public/linkedin.png'
import GitHubLogo from '../../public/githubsmall.png'
import GitHubLogoHam from '../../public/github-logo.png'
import '../styles/Navbar.css'
import { Routes, Route, Link } from 'react-router-dom'

const NavBar = () => {
  const [hamburgerClass, setHamburgerClass] = useState('hamburger')
  const [mobileMenu, setMobileMenu] = useState('mobile')
  const handleHamburger = () => {
    if (hamburgerClass === 'hamburger') {
      setHamburgerClass('hamburger is-active')
      setMobileMenu('mobile is-active')
    } else {
      setHamburgerClass('hamburger')
      setMobileMenu('mobile')
    }
  }
  return (
    <>
      <div className="navbar">
        <HashLink to="/">Home</HashLink>
        <HashLink to="/projects">Projects</HashLink>
        <HashLink to="/contact">Contact</HashLink>
        <a href="https://www.linkedin.com/in/akutuhkanen/">
          <img className="logo" src={LiLogo} alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/akutuh">
          <img className="logo" src={GitHubLogo} alt="github logo" />
        </a>
        <button onClick={handleHamburger} className={hamburgerClass}>
          <div className="bar"></div>
        </button>
      </div>
      <div className={mobileMenu}>
        <HashLink onClick={handleHamburger} to="/">
          Home
        </HashLink>
        <HashLink onClick={handleHamburger} to="/projects">
          Projects
        </HashLink>
        <HashLink onClick={handleHamburger} to="/contact">
          Contact
        </HashLink>
        <a href="https://www.linkedin.com/in/akutuhkanen/">
          <img className="logo" src={LiLogo} alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/akutuh">
          <img className="logo" src={GitHubLogoHam} alt="github logo" />
        </a>
      </div>
    </>
  )
}

export default NavBar
