import React, { useState } from 'react'
import Navbtn from './Navbtn'
import '../css/Navbar.css'

function Navbar({
  displayCard,
  loggedIn,
  displayProfile,
  userName,
  displayOrder,
}) {
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
        <div className="nav-account">
          <div
            className="nav-order-btn nav-acc-btn"
            style={loggedIn ? { display: 'block' } : { display: 'none' }}
            onClick={displayOrder}
          >
            order
          </div>
          <div
            className="nav-log-in nav-acc-btn"
            style={loggedIn ? { display: 'none' } : { display: 'block' }}
            onClick={() => {
              displayCard()
              closeMobileMenu()
            }}
          >
            Log in
          </div>
          <div
            className="nav-profile-icon"
            onClick={displayProfile}
            style={loggedIn ? { display: 'block' } : { display: 'none' }}
          >
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="nav-profile-name" onClick={displayProfile}>
            {loggedIn ? userName : ''}
          </div>
        </div>
        <div className="navigation">
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
      </div>
    </>
  )
}

export default Navbar
