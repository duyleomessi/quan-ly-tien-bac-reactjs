import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Home } from "./component/Home/Home";
import { User } from "./component/User/User";
import App from "./App";

export const Router = (props) => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/user" render={props => <User {...props} />} />
      <Route path="/home" render={props => <Home {...props} />} />
    </Switch>
  );
};
