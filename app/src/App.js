import React from "react";
import { NavLink } from 'react-router-dom';
import "./App.scss";

import Navbar from "./layout/Navbar/Navbar";
import Main from "./layout/Main/Main";

class App extends React.Component {
  state = {
    isOpen: false
  };

  onToggleOverlay = () => this.setState({ isOpen: !this.state.isOpen });

  onCloseOverlay = () => this.setState({ isOpen: false });

  render() {
    return (
      <div className="main-container">
        <Navbar onToggleOverlay={this.onToggleOverlay} />
        <Main />
        {this.state.isOpen && (
          <div className="overlay">
            <div className='overlay-item' onClick={this.onCloseOverlay}><NavLink to='/designers'>DESIGNERS</NavLink></div>
            <div className='overlay-item' onClick={this.onCloseOverlay}><NavLink to='/mixes'>MIXES</NavLink></div>
            <div className='overlay-item' onClick={this.onCloseOverlay}><NavLink to='/about'>ABOUT</NavLink></div>
            <div className='overlay-item' onClick={this.onCloseOverlay}><NavLink to='/contact'>CONTACT</NavLink></div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
