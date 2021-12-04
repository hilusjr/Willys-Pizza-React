import React from 'react'
import { Link } from 'react-scroll'

function Navbtn({ content, closeMobileMenu, setActive, isActive }) {
  const element = content

  const activeBtn = {
    backgroundPositionX: '0%',
  }
  const nonActiveBtn = {
    backgroundPositionX: '100%',
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
          setActive(element)
        }}
        style={element === isActive ? activeBtn : nonActiveBtn}
      >
        {content}
      </div>
    </Link>
  )
}

export default Navbtn
