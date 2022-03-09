import React from 'react'
import './style.css'
import Logo from '../../common/Logo'
import banner from './banner.png'
const Banner = ({ handleScrollMenu }) => {
  return (
    <header>
      <div className='header-content'>
        <Logo />
        <div className='content-main'>
          <h1>Delicious food for your cravings</h1>
          <p>We made fresh and heakthy meaks with different recipes</p>
          <button onClick={handleScrollMenu}>
            View Menu <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
      </div>
      <img src={banner} className='header-img' />
    </header>
  )
}

export default Banner
