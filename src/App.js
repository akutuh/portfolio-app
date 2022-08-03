import React from 'react' // tarvitsemme importin nyt myös kompontentin määrittelyn yhteydessä
import NavBar from './components/Navbar'
import Main from './components/Main'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import '../src/styles/App.css'
import { Routes, Route } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db, 'contactInfo')

const sendInfo = (newObject) => {
  addDoc(colRef, newObject).then(() => {
    console.log(newObject)
  })
}

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact createInfo={sendInfo} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
