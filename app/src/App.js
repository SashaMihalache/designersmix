import React from "react";
import "./App.scss";

import Navbar from "./layout/Navbar/Navbar";
import Overlay from './components/Overlay/Overlay';
import Main from "./layout/Main/Main";
import Footer from './layout/Footer/Footer';

class App extends React.Component {
  state = {
    isOpen: false
  };

  onToggleOverlay = () => this.setState({ isOpen: !this.state.isOpen });

  onCloseOverlay = () => this.setState({ isOpen: false });

  render() {
    return (
      <div className="app">
        <Navbar onToggleOverlay={this.onToggleOverlay} />
        <Main />
        {
          this.state.isOpen && 
          <Overlay onCloseOverlay={this.onCloseOverlay} />
        }
        <Footer />
      </div>
    );
  }
}

export default App;
