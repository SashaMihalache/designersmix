import React from 'react';
import { NavLink } from 'react-router-dom';

import './Overlay.scss';

const Overlay = ({ onCloseOverlay }) => (
  <div className="overlay">
    <div className='overlay-item' onClick={onCloseOverlay}>
      <NavLink to='/designers'>DESIGNERS</NavLink>
    </div>
    <div className='overlay-item' onClick={onCloseOverlay}>
      <NavLink to='/mixes'>MIXES</NavLink>
    </div>
    <div className='overlay-item' onClick={onCloseOverlay}>
      <NavLink to='/about'>ABOUT</NavLink>
    </div>
    <div className='overlay-item' onClick={onCloseOverlay}>
      <NavLink to='/contact'>CONTACT</NavLink>
    </div>
  </div>
)

export default Overlay;