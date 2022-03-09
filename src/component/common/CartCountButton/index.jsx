import React from 'react'
import { createStructuredSelector } from 'reselect'
import { selectCartItemsCount } from '../../../redux/cart/cart.selector'
import { connect } from 'react-redux'
import './style.css'
import { useNavigate } from 'react-router-dom'

const CartCountButton = ({ cartCount }) => {
  const history = useNavigate()
  return (
    <div className='btnCartCount' onClick={() => history('/cart')}>
      <div className='count'>{cartCount >= 100 ? '99' : cartCount}</div>
      <i className='fas fa-shopping-cart'></i>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
})
export default connect(mapStateToProps)(CartCountButton)
