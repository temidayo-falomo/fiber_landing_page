import React from 'react';
import './Slider.css'
import { Reviews } from '../data';

function Slider() {
  return (
      <div className='sliders'>
          <div className='sliders-container'>
          {Reviews.map((item)=> {
                  const {id, avatar, name, revenue, testimony, view} = item;
                  return (
                    <div className='card' key={id}>
                    <div className='top-part-card'>
                        <img src={avatar} alt='' />
                        <div>
                            <p>{name}</p>
                            <span>{revenue}</span>
                        </div>
                    </div>
                    <p className='testimony'>{testimony}</p>
                    <button>{view}</button>
                </div>
                  )
              })}
              
          </div>
      </div>
  );
}

export default Slider;
