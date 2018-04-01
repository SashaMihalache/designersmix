import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="container">
    <div className="shares">
      <i className="fa fa-facebook"></i>
      <i className="fa fa-instagram"></i>
    </div>

    <div className="links">
      <NavLink to='/designers'>DESIGNERS</NavLink>
      <NavLink to='/mixes'>MIXES</NavLink>
      <NavLink to='/about'>ABOUT</NavLink>
      <NavLink to='/contact'>CONTACT</NavLink>
    </div>

    <div className="powered-by">
      POWERED BY <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCIgdmlld0JveD0iMCAwIDM0IDM0Ij48cGF0aCBmaWxsPSIjNUM1QzVDIiBkPSJNMTcgMEM3LjYgMCAwIDcuNiAwIDE3czcuNiAxNyAxNyAxNyAxNy03LjYgMTctMTdTMjYuNCAwIDE3IDB6bS4xIDI1LjF2Ni43bC00LTUuOS0uNi0uOHMtMi42LTMuNy0zLTQuN2MtLjUtMS4xLS44LTIuMy0uOC0zLjUgMC00LjYgMy43LTguMyA4LjMtOC4zIDQuNiAwIDguMyAzLjcgOC4zIDguMyAwIDQuNS0zLjcgOC4yLTguMiA4LjJ6Ii8+PC9zdmc+" alt=""/>
    </div>
    </div>
  </div>
);

export default Footer;