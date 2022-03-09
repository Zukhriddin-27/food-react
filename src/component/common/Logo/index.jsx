import React from 'react'
import './style.css'
import logoImg from './logo.png'
const Logo = () => {
  return (
    <div className='logo'>
      <div>
        <img src={logoImg} alt='Logo-img' />
        <div>
          <b>
            Taste<span>zez</span>
          </b>
        </div>
      </div>
      <p>Restaurant & BBQ</p>
    </div>
  )
}

export default Logo
