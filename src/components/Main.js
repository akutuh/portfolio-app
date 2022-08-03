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
        something something something something something
      </div>
      <div className="main-flex-container">
        <div className="main-flex-item">
          <button>
            <HashLink to="/projects">Projects</HashLink>
          </button>
        </div>
        <div className="main-flex-item">
          <form>
            <button formAction="https://drive.google.com/file/d/1MQofBizZauXREtb5kCFmx9noiqpUMxrO/view">
              Resume
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Main
