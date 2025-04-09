import React from 'react'
import Header from './components/Header'
import './App.css'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'

const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
    </div>
  )
}

export default App