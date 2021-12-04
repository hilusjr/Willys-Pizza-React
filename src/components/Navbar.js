import React, { useState } from 'react'
import Navbtn from './Navbtn'
import '../css/Navbar.css'

function Navbar() {
  const navBtns = ['start', 'hot deals', 'menu', 'about', 'contact']
  const [isVisible, setVisible] = useState(false)
  const [isActive, setActive] = useState('start')
  const closeMobileMenu = () => {
    setVisible(!isVisible)
  }
  return (
    <>
      <div className="toggle-menu" onClick={closeMobileMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="navbar" data-visible={isVisible}>
        {navBtns.map((navBtn) => (
          <Navbtn
            key={navBtn}
            content={navBtn}
            setActive={setActive}
            isActive={isActive}
            closeMobileMenu={closeMobileMenu}
          />
        ))}
      </div>
    </>
  )
}

export default Navbar
