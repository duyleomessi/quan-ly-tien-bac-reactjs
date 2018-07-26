import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Header } from "./component/Header/Header";
import { Row } from "react-bootstrap";
import { Router } from "./Router";

class App extends Component {
  render() {
    return (
      <div className="col-xs-10 col-xs-offset-1">
        <Row>
          <Header />
        </Row>
        <Row>{this.props.children}</Row>
        <Router />
      </div>
    );
  }
}

export default App;
