import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';

export default props => (
	<Router>
		<Switch>
			<Route exact path="/login" component={Login} />
		</Switch>
	</Router>
);