import React from 'react'
import { Link } from 'react-scroll'

function Navbtn({ content, isVisible, setVisible }) {
  return (
    <Link
      to={`${content.replace(/\s+/g, '-')}-page`}
      duration={500}
      spy={true}
      smooth={true}
    >
      <div className="nav-btn" onClick={() => setVisible(!isVisible)}>
        {content}
      </div>
    </Link>
  )
}

export default Navbtn
