import React from 'react' // tarvitsemme importin nyt myös kompontentin määrittelyn yhteydessä
import NavBar from './components/Navbar'
import Main from './components/Main'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import '../src/styles/App.css'

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Main />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
