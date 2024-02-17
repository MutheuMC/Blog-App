import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/images.png"

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
            <Link  className="link" to="/?cat=art"><h6>ART</h6></Link>
            <Link  className="link" to="/?cat=art"><h6>Technology</h6></Link>
            <Link  className="link" to="/?cat=art"><h6>Mathematics</h6></Link>
            <Link  className="link" to="/?cat=art"><h6>Science</h6></Link>
            <Link  className="link" to="/?cat=art"><h6>Creativity</h6></Link>
            <span>John</span>
            <span>Logout</span>
            <span className="link">
              <Link className="write" to="/write">Write</Link>
              </span>
        </div>
    </div>
    
</div>
  )
}

export default Navbar