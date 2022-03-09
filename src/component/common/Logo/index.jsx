import React from 'react'
import './style.css'
import logoImg from './logo.png'
const Logo = () => {
  return (
    <div className='logo'>
      <div>
        <img src={logoImg} alt='Logo-img' />
        <span>
          <b>Taste</b>
        </span>
      </div>
      <p>Restaurant & BBQ</p>
    </div>
  )
}

export default Logo
