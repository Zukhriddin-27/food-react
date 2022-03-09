import React from 'react'
import Logo from '../../component/common/Logo'
import Menu from '../../component/common/Menu/index'

import './style.css'
import Footer from '../../component/common/Footer/index'
import EmptyCart from '../../component/Cart/EmptyCart'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from '../../redux/cart/cart.selector'

const Cart = ({ cartCount, cartList, cartTotal }) => (
  <div className='container'>
    <div className='cart-header'>
      <Logo />
    </div>
    {cartCount === 0 ? (
      <EmptyCart />
    ) : (
      <div className='orders'>
        <h1 className='orders-heading'>Your Orders</h1>
        <div className='orders-menu'>
          <Menu list={cartList} />
        </div>
        <h3 className='orders-total'>Your Total $ {cartTotal}</h3>
      </div>
    )}

    <Footer />
  </div>
)
const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
})

export default connect(mapStateToProps)(Cart)
