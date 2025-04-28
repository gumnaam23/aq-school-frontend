import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = ({ onScroll }) => {
  const [displayNav, setDisplayNav] = useState(true)

  
  return (
    <nav>
      <div className='logo_container'><img src="./tblogo.png" alt="" /></div>
      <ul className={`${displayNav ? "displayNav" : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => onScroll('about')}><span>About</span></li>
        <li onClick={() => onScroll('contact')}><span>Contact</span></li>
        <li>
          <Link to='/login'>Login</Link>
        </li>

      </ul>
      <div className="navbar_menu" onClick={() => setDisplayNav(pre => !pre)}>menu</div>
    </nav>
  )
}

export default Navbar
