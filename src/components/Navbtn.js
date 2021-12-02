import React, { useState } from 'react'
import { Link } from 'react-scroll'

function Navbtn({ content, isVisible, setVisible }) {
  const closeMobileMenu = () => {
    setVisible(!isVisible)
  }

  return (
    <Link
      to={`${content.replace(/\s+/g, '-')}-page`}
      duration={500}
      spy={true}
      smooth={true}
    >
      <div
        className="nav-btn"
        onClick={() => {
          closeMobileMenu()
        }}
      >
        {content}
      </div>
    </Link>
  )
}

export default Navbtn
