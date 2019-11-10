import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Secret from './pages/Secret/Secret';

export default props => (
	<Router>
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route exact path="/secret" component={Secret} />
		</Switch>
	</Router>
);