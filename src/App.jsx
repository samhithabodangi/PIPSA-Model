import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Predict from './pages/Predict'

function App() {

  return (
      <div>
      <Header />
      <Predict />
      <Footer />
      </div>
  )
}

export default App
