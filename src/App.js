import React from 'react' // tarvitsemme importin nyt myös kompontentin määrittelyn yhteydessä
import NavBar from './components/Navbar'
import Main from './components/Main'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import '../src/styles/App.css'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
