import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="Nav">
      <img src="./images/ironhack-logo.svg" alt="ironhackLogo"/>
      <img src="./images/menu-top.svg" alt="menuTop"/>
      </div>
      <div className="Top">
        <h1> Say hello to ReactJS! </h1>
        <p>You will learn a Frontend framework from scratch, to become an Ninka Developer.</p>
        <button><b>Awesome!</b></button>
      </div>
      </div>
    );
  }
}

export default App;