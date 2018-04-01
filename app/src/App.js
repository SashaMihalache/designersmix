import React from "react";
import "./App.scss";

import Navbar from "./layout/Navbar/Navbar";
import Overlay from './components/Overlay/Overlay';
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
        {
          this.state.isOpen && 
          <Overlay onCloseOverlay={this.onCloseOverlay} />
        }
      </div>
    );
  }
}

export default App;
