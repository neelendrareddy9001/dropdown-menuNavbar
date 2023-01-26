import React, {useState} from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'


function Navbar () {

    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const hadnleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const onMouseEnter = () => {
       if(window.innerWidth < 960) {
           setDropdown(true);
       } 
       else {
           setDropdown(false);
       }
    };
    return (
        <nav className='navbar'>
           <Link to='/' className="navbar-logo">
             EPIC
           </Link>
           <div className='menu-icon' onClick={hadnleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
           </div>
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services <i className='fas fa-caret-down' /></Link>
                {dropdown && <Dropdown/>}
              </li>
              <li className='nav-item'>
                <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>Contact Us</Link>
              </li>
              <li className='nav-item'>
                <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>Sign Up</Link>
              </li>
           </ul>
           <Button/>
        </nav>
    )
}


export default Navbar