import React from 'react';
import { useState } from 'react';
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
}

  return (
      <nav>
          <div className='nav-container'>
              <div className='mobile-container'>
                 <Link to='/'><h1>Fiber</h1></Link>
                  <div className='menu-item' onClick={handleClick}>
                {click ? <RiCloseLine /> : <GiHamburgerMenu />}
              </div>
          </div>

              <div className={click ? 'nav-links-btns active' : 'nav-links-btns'}>
              <ul className='nav-links'>
                  <li><a href='/'>Community</a></li>
                  <li><a href='/'>Pricing</a></li>
                  <li><a href='/'>Features</a></li>
              </ul>
              <div className='btns'>
                  <Link to='/sign-in'><button className='trans-btn'>Sign In</button></Link>
                  <Link to='/sign-up'><button className='blue-btn' >Sign Up</button></Link>
              </div>
             </div>

          </div>
      </nav>
  );
}

export default Navbar;
