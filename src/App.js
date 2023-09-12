import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/BannerSection/Home';
import './App.css'

const App = () => {
  return (
    <div className='main-container'>
      <Navbar/>
      <Home/>
      
    </div>
  )
}

export default App
