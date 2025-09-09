import { useState } from 'react'
import './App.css'

import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'



function App() {
  return (
  
    <div>
      <div className="background">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <div className="scroll-wrapper">
        <header className="left-header">
          <h1>John Polasek</h1>
          <h3>Majoring in Computer Science at Oregon State University, <br/> including a certificate in Cyber Security.</h3> 
          <div className="header-bottom">
          <Navigation />
          <footer>
            <p>© 2025 John Polasek</p>
          </footer>
        </div>
        </header>
        <div className="right-content">
        <HomePage />
        </div>
      </div>
  </div>

  )
}

export default App
