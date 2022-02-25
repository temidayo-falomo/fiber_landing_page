import React from 'react';
import './Footer.css'

function Footer() {
  return (
      <footer>
          <div className='footer-container'>

              <div className='sec-1'>
                  <h1>Fiber</h1>
                  <p>
                  With Fiber you can setup your own personal portfolio in minutes with
                  dozens of premade, beautiful templates.
                 </p>
                  <span>
                    Made with 🖤 in the Netherlands.
                 </span>
              </div>

              <section className='sec-2'>
                  <h3>Sitemap</h3>
                  <a href='/'>Homepage</a>
                  <a href='/'>Pricing</a>
                  <a href='/'>Testimonials</a>
                  <a href='/'>Features</a>
              </section>

              <section className='sec-3'>
                  <h3>Resources</h3>
                  <a href='/'>Support</a>
                  <a href='/'>Contact</a>
                  <a href='/'>FAQ</a>
              </section>

              <section className='sec-4'>
                 <h3>Company</h3>
                  <a href='/'>About</a>
                  <a href='/'>Customers</a>
                  <a href='/'>Blog</a>
              </section>

              <section className='sec-5'>
                 <h3>Portfolio</h3>
                  <a href='/'>Sarah Andrews</a>
                  <a href='/'>Matthew Higgins</a>
                  <a href='/'>Janice Dave</a>
              </section>

          </div>
      </footer>
  );
}

export default Footer;
