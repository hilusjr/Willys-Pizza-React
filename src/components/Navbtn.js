import React from 'react'
import {Link} from 'react-scroll'

function Navbtn(props) {

    // const scrollToElement = element => {
    //     scrollTo
    // }

    return (
        <Link to={`${props.content.replace(/\s+/g, "-")}-page`}  duration={500}spy={true} smooth={true}>
        <div className="nav-btn" onClick={() => console.log(props.content)}>
            {props.content}
        </div>
        </Link>
    )
}

export default Navbtn
