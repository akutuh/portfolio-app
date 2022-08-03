import React from 'react'
import { HashLink } from 'react-router-hash-link'
import '../styles/Main.css'

const Main = () => {
  return (
    <>
      <div className="name" id="/">
        <h1>Aku Tuhkanen</h1>
      </div>
      <div className="sub">
        Front-end Software Developer HTML CSS Javascript React Redux
      </div>
      <div className="main-grid-container">
        <div className="grid1">
          <button>
            <HashLink to="/projects">Projects</HashLink>
          </button>
        </div>
        <div className="grid2">
          <form>
            <button formAction="https://drive.google.com/file/d/1MQofBizZauXREtb5kCFmx9noiqpUMxrO/view">
              Resume
            </button>
          </form>
        </div>
      </div>
      <div className="sub">
        this site is made with react, React Router, sass and is hosted on google
        firebase
      </div>
    </>
  )
}

export default Main
