import React from 'react'
import emptyCartImg from './empty_cart.4a7779da.png'
import './style.css'
import { useNavigate } from 'react-router'
const EmptyCart = () => {
  let history = useNavigate()
  return (
    <div className='emptyCart'>
      <img src={emptyCartImg} alt='empty cart image' />
      <button onClick={() => history('/')}>
        <i className='fas fa-long-arrow-alt-left'>Shop Now</i>
      </button>
    </div>
  )
}

export default EmptyCart
