import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/images.png"
import { AuthContext } from '../context/authContext'

const Navbar = () => {
  const {currentUser, logout} = useContext(AuthContext);

  return (
    <div className='navbar'>
    <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
            <Link  className="link" to="/?cat=art"><h6>ART</h6></Link>
            <Link  className="link" to="/?cat=technology"><h6>Technology</h6></Link>
            <Link  className="link" to="/?cat=math"><h6>Mathematics</h6></Link>
            <Link  className="link" to="/?cat=science"><h6>Science</h6></Link>
            <Link  className="link" to="/?cat=creative"><h6>Creativity</h6></Link>
            <span>{currentUser?.username}</span>
            {currentUser ? (
            <span onClick={logout}>logout</span>
            ):
            <Link className='link' to ='/login'>Login</Link>
            }
            <span className="link">
              <Link className="write" to="/write">Write</Link>
              </span>
        </div>
    </div>
    
</div>
  )
}

export default Navbar