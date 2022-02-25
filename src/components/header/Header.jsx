import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


function Header() {
  return (
      <header>
          <div className='landing'>
              <div className='stars'>
                 <img src='./Assets/star.svg' alt='' />
                 <img src='./Assets/star.svg' alt='' />
                 <img src='./Assets/star.svg' alt='' />
                 <img src='./Assets/star.svg' alt='' />
                 <img src='./Assets/star.svg' alt='' />
                 <p className='reviews-no'>Rated 4.8/5 (243 reviews)</p>
              </div>
              <h1>Create your portfolio in minutes.</h1>
              <p>
                With Fiber you can setup your own personal portfolio in minutes with
                dozens of premade, beautiful templates.
              </p>
              <div className='trial-example'>
                <Link to='/start-free-trial'><button className='blue-btn'>Start Free Trial</button></Link>
                <span>View Examples</span>
              </div>
              <div className='checks'>
                <div><img src='./Assets/Checkmark.svg' alt='' className='checkmark'/>No Credit Card Required</div>
                <div><img src='./Assets/Checkmark.svg' alt='' className='checkmark'/>10 Free Templates</div>
              </div>
            </div>
            <img src='./Assets/hero-Illustration.png' alt='' className='hero-illustration'/>
      </header>
  );
}

export default Header;
