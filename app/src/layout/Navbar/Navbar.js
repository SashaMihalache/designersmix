import React from "react";
import "./Navbar.scss";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="container">
          <div className="menu">
            <div className="burger" onClick={this.props.onToggleOverlay} />
          </div>
          <div className="title">Designer's Mix</div>
          <div className="action-panel">
            <div className="login">Login</div>
            <div className="separator">|</div>
            <div className="logout">Logout</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
