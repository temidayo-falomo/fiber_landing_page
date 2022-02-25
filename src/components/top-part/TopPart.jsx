import React from 'react';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import './TopPart.css'

function TopPart() {
  return (
      <div className='top-part'>
        <Navbar />
        <Header />
      </div>
  );
}

export default TopPart;
