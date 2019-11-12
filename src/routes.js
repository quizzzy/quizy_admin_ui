import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Profile from "./components/Profile";

export default () => (
  <Router>
    <Switch>
      <Route path="/profiles" component={Home} />
      <Route path="/profiles/:id" component={Profile} />
      <Route exact path="/" component={Login} />
    </Switch>
  </Router>
);
