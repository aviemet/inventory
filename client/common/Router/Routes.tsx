import React from 'react'

import * as Auth from '../Auth';
import { Login, Register } from '../Auth';
import { Inventory } from '../Pages';

import { Route, Router, Switch, Redirect } from '../Router';

interface PrivateRouteProps {
	component: React.ComponentType,
	path: String,
	exact: Boolean
};

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }): any => (
	<Route {...rest} render={(props: any) => (
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

const ApplicationRouter: React.FC = () => {
	return (
		<Router>
			<Switch>
				<PrivateRoute exact path='/' component={ Inventory } />
				<Route path='/login' component={ Login } />
				<Route path='/register' component={ Register } />
				<Route path='/logout' render={() => {

					return <h1>ok</h1>
				} } />
			</Switch>
		</Router>
	)
};

export default ApplicationRouter;
