import React, { useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Navbtn from './Navbtn'
import '../css/Navbar.css'

function Navbar({ displayCard }) {
  const navBtns = ['start', 'hot deals', 'menu', 'about', 'contact']
  const [isVisible, setVisible] = useState(false)
  const [isActive, setActive] = useState('start')
  const [loggedIn, setLoggedIn] = useState(false)

  const closeMobileMenu = () => {
    setVisible(!isVisible)
  }

  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    user != null ? setLoggedIn(true) : setLoggedIn(false)
  })
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
          <div className="nav-profile-icon">
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="nav-profile-name"></div>
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
