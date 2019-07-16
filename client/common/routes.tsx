import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router';

import * as Auth from './Auth';
import Login from './Auth/Login';
import Register from './Auth/Register';

interface RouterProps {
	children?: React.ReactNode,
	router: any
}

const PrivateRoute = ({ component: Component, ...rest }: any) => (
	<Route {...rest} render={props => (
		Auth.isLoggedIn() ?
			<Component {...props} />
		:
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location }
			}} />
		)}
	/>
);

const Routes: React.FC<RouterProps> = ({ router }) => {
	const { Route, Switch, Link } = router;

	return(
		<>
			<Switch>
				{/* <Route path='/' component={home} /> */}
				<Route exact path='/login' component={ Login } />
				<PrivateRoute path='/register' component={ Register } />
			</Switch>
		</>
	);
};

export default Routes;