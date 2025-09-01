import { useState } from 'react'
import './App.css'

import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'

function App() {
  return (
  
    <div>
      <header>
        <h1>John Polasek</h1>
        <p>Majored in computer science at Oregon State University, with a certificate in cyber security.</p>    
      </header>

      <Navigation />
      <HomePage />
      
    <footer>
      <p>© 2025 John Polasek</p>
    </footer>
  </div>

  )
}

export default App
