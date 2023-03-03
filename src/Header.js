import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      {/* <img 
        src='fomologo.png'
        alt='brand logo'
        className='brandImg'
      /> */}
      <div className='headerNavLeft'>
        <div className='headerOption'>
          <span className='headerOptionLine1'>
            Home
          </span>
        </div>
        <div className='headerOption'>
          <span className='headerOptionLine1'>
            About
          </span>
        </div>
        <div className='headerOption'>
          <span className='headerOptionLine1'>
            Shopping
          </span>
        </div>
        <div className='headerOption'>
          <span className='headerOptionLine1'>
            Customize
          </span>
        </div>
      </div>
      <div className='headerNavMiddle'>
        <div className='headerLogo'>
          <img 
            src='./fomologo.svg'
            alt='fomo logo'
            className='navLogo'
          />
        </div>
      </div>
      <div className='headerNavRight'>
        <div className='headerOption'>
          <span className='headerOptionLine1'>
            Photos
          </span>
        </div>
        <div className='headerOption'>
          <span className='headerOptionLine1'>
            Testimonials
          </span>
        </div>
        <div className='headerOption'>
          <span className='headerOptionLine1'>
            Sign in
          </span>
        </div>
        <div className='headerOption'>
          <span className='headerOptionLine1'>
            cart
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header