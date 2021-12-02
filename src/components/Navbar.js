import React, { useState } from 'react'
import Navbtn from './Navbtn'
import '../css/Navbar.css'

function Navbar() {
  const navBtns = ['start', 'hot deals', 'menu', 'about', 'contact']
  const [isVisible, setVisible] = useState(false)

  return (
    <>
      <div className="toggle-menu" onClick={() => setVisible(!isVisible)}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="navbar" data-visible={isVisible.toString()}>
        {navBtns.map((navBtn) => (
          <Navbtn
            key={navBtn}
            content={navBtn}
            isVisible={isVisible}
            setVisible={setVisible}
          />
        ))}
      </div>
    </>
  )
}

export default Navbar
