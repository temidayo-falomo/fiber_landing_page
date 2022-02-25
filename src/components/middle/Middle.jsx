import React from 'react';
import Diversify from '../diversify/Diversify';
import Features from '../features/Features';
import Slider from '../slider/Slider';
import './Middle.css'

function Middle() {
  return (
      <section>
          <Features />
          <Diversify />
          <Slider />
      </section>
  );
}

export default Middle;
