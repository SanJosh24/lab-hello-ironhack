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
        <h1> <b>Say hello to ReactJS</b></h1>
        <p>You will learn a Frontend framework from scratch, to become an Ninka Developer.</p>
        <button><b>Awesome!</b></button>
      </div>

      <div className="Bottom">

        <div className="Bottom-img1">
        <img src="./images/icon1.png" alt="icon1"/>
        <p>React makes it <br/>painless to create <br/>interactice UIs.</p>
        </div>

        <div className="Bottom-img2">
        <img src="./images/icon2.png" alt="icon2"/>
        <p>Build encapsulated <br/>components that <br/>manage their state.</p>
        </div>

        <div className="Bottom-img3">
        <img src="./images/icon3.png" alt="icon3"/>
        <p>A set of immutable <br/>values are passed to <br/>the component's.</p>
        </div>

        <div className="Bottom-img4">
        <img src="./images/icon4.png" alt="icon4"/>
        <p>Staticaly-typed, <br/>designed to run on <br/>modern browsers.</p>
        </div>

      </div>
      </div>
    );
  }
}

export default App;