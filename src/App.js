import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import Header from "./component/Header/Header";
import Main from "./component/Router/Main";

class App extends Component {
  render() {
    return (
      <div className="col-xs-10 col-xs-offset-1">  
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
