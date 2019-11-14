import React from 'react';
import {
	Route,
	HashRouter as Router,
	Switch,
	Redirect,
} from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';

export default () => (
	<Router>
		<Switch>
			<Route exact path="/profiles" component={Home} />
			<Route path="/" component={Login} />
			<Redirect from="*" to="/profiles" />
		</Switch>
	</Router>
);
