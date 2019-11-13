import React from "react";
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Profile from "./components/Profile";

export default () => (
    <Router>
        <Switch>
            <Route exact path="/profiles" component={Home} />
            <Route path="/profiles/:id" component={Profile} />
            <Route path="/login" component={Login} />
            <Redirect from="*" to="/profiles" />
        </Switch>
    </Router>
);
