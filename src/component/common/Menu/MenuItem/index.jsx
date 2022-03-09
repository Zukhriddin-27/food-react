import React from 'react'
import ButtonAddRemoveItem from '../../ButtonAddRemoveItem'
import './style.css'
import { createStructuredSelector } from 'reselect'
import {
  selectCartItems,
  selectCartItemsCount,
} from '../../../../redux/cart/cart.selector.js'
import { cartAddItem, cartRemoveItem } from '../../../../redux/cart/cart.action'
import { connect } from 'react-redux'

const MenuItem = ({
  item,
  cartCount,
  cartList,
  cartAddItem,
  cartRemoveItem,
}) => {
  const { id, img, name, info, price } = item

  const handleItemQuantity = () => {
    let quantity = 0
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item) => item.id === id)
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity
      }
    }
    return quantity
  }
  return (
    <div className='container'>
      <div className='item'>
        <img src={img} alt='Item image' />
        <div className='item-head_desc'>
          <p className='head_desc-name'>{name}</p>
          <p className='head_desc-info'>
            <small>{info}</small>
          </p>
        </div>
        <div className='item-foot_desc'>
          <span className='foot_desc-price'> $ {price} </span>
          <ButtonAddRemoveItem
            quantity={handleItemQuantity()}
            handleRemoveItem={() => cartRemoveItem(item)}
            handleAddItem={() => cartAddItem(item)}
          />
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
})

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
})
export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)
