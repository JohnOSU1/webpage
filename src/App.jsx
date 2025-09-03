import { useState } from 'react'
import './App.css'

import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'



function App() {
  return (
  
    <div>
      <div class="background">
        <div class="stars"></div>
        <div class="twinkling"></div>
      </div>
      <div class="scroll-wrapper">
        <header class="left-header">
          <h1>John Polasek</h1>
          <p>Majoring in Computer Science at Oregon State University, with a certificate in Cyber Security.</p> 
          <div className="header-bottom">
          <Navigation />
          <footer>
            <p>© 2025 John Polasek</p>
          </footer>
        </div>
        </header>
        <div class="right-content">
        <HomePage />
        </div>
      </div>
  </div>

  )
}

export default App
