import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav>
    <div className="menu" />
    <div className="title">DesignerMX</div>
    <div className="action-panel">
      <div className="login">Login</div>
      <div className="separator">|</div>
      <div className="logout">Logout</div>
    </div>
  </nav>
);

export default Navbar;
