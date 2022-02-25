import React from 'react';
import './Diversify.css'

function Diversify() {
  return (
      <div className='box'>
          <div className='box-container'>
              <div className='diversify-top'>
                  <h2>Diversify your portfolio.</h2>
                  <p>
                      Create an even more impressive portfolio by
                      creating case studies for your projects. Simply 
                      follow our step-by-step guide.
                  </p>
                  <button className='white-btn'>Start Free Trial</button>
              </div>
              <img src='./Assets/Page Image.png' alt='' className='page-image'/>
          </div>
      </div>
  );
}

export default Diversify;
