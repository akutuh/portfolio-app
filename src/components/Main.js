import React from 'react'
import { HashLink } from 'react-router-hash-link'
import '../styles/Main.css'

const Main = () => {
  return (
    <>
      <div className="name">
        <h1>Aku Tuhkanen</h1>
      </div>
      <div className="sub">
        something something something something something
      </div>
      <div className="main-flex-container">
        <div className="main-flex-item">
          <button>
            <HashLink to="/#projects">Projects</HashLink>
          </button>
        </div>
        <div className="main-flex-item">
          <form>
            <button formaction="https://drive.google.com/file/d/1MQofBizZauXREtb5kCFmx9noiqpUMxrO/view">
              Resume
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

//<div className="sub">react developer</div>

/*
<div className="button">
          <button>
            <HashLink to="/#projects">Projects</HashLink>
          </button>
        </div>
        <div className="button">
          <button>
            <a href="https://drive.google.com/file/d/1MQofBizZauXREtb5kCFmx9noiqpUMxrO/view">
              Resume
            </a>
          </button>
        </div>


        <div className="grid-container-name">
          <div className="grid-item-name">Web developer</div>
          <div className="grid-item-name">React</div>
          <div className="grid-item-name">Web developer</div>
        </div>

        <button href="https://drive.google.com/file/d/1MQofBizZauXREtb5kCFmx9noiqpUMxrO/view">
            <a href="https://drive.google.com/file/d/1MQofBizZauXREtb5kCFmx9noiqpUMxrO/view">
              Resume
            </a>
          </button>
*/
export default Main
