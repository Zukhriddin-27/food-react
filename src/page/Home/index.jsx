import React, { useRef } from 'react'
import Banner from '../../component/Home/Banner'
import Menu from '../../component/common/Menu'
import Footer from '../../component/common/Footer'
import CartCountButton from '../../component/common/CartCountButton'
import { menuItemsData } from '../../component/common/Menu/data'
import './style.css'
const Home = () => {
  const menuRef = useRef()

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className='container'>
      {/* Banner */}
      <Banner handleScrollMenu={handleScrollMenu} />
      {/* Menu */}
      <Menu list={menuItemsData} ref={menuRef} />
      {/* Footer */}
      <Footer />
      {/* Cart Count Button */}
      <CartCountButton />
    </div>
  )
}

export default Home
