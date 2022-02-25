import React from 'react';
import './Features.css'

function Features() {
  return (
      <div className='features'>
        <div className='features-container'>
        <div className='top-features'>
          <h4>Why Fiber?</h4>
          <h2>A good portfolio means good employability.</h2>
        </div>

        <div className='features-list'>

          <div>
             <img src='./Assets/time.svg' alt=''/>
               <h5>Build in minutes</h5>
                 <p>
                   With a selection of premade templates, you
                    can build out a portfolio in less than 10 minutes.
                 </p>
           </div>

           <div>
             <img src='./Assets/code.svg' alt=''/>
               <h5>Add custom CSS</h5>
                 <p>
                   Customize your personal portfolio even more
                   with the ability to add yourbown custom CSS styles.
                 </p>
           </div>

           <div>
             <img src='./Assets/allSizes.svg' alt=''/>
               <h5>Responsive</h5>
                 <p>
                   All Fiber templates are fully responsive to ensure the experience is
                   seamless accross all devices.
                 </p>
           </div>


        </div>
        </div>
      </div>
  );
}

export default Features;
