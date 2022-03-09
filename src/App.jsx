import React from 'react'
import Home from './page/Home/index.jsx'
import './App.css'
import Cart from './page/Cart/index.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
