import React from "react";
import "./App.css";

import Navbar from "./layout/Navbar/Navbar";
import Main from "./layout/Main/Main";

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
