import React, { useState } from 'react'
import Navbtn from './Navbtn'
import '../css/Navbar.css'

function Navbar() {
  const [isVisible, setVisible] = useState(false)
  const toggleMenu = () => {
    setVisible(!isVisible)
  }

  const navBtns = ['start', 'hot deals', 'menu', 'about', 'contact']

  return (
    <>
      <div className="toggle-menu" onClick={toggleMenu}>
        X
      </div>
      <div className="navbar" data-visible={isVisible.toString()}>
        {navBtns.map((navBtn) => (
          <Navbtn key={navBtn} content={navBtn} />
        ))}
      </div>
    </>
  )
}

export default Navbar
