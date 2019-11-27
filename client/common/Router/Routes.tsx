import React from 'react'

import * as Auth from '../Auth';
import { Login, Register } from '../Auth';
import { Inventory } from '../Pages';

import { Route, Router, Switch, Redirect } from '../Router';

interface PrivateRouteProps {
	component: React.ComponentType,
	rest: any
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }): any => { console.log({ rest }); return (
	<Route router={ Router } {...rest} render={(props: any) => (
		Auth.isLoggedIn() ?
			<Component {...props} />
		:
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location }
			}} />
		)}
	/>
)};

interface ApplicationRouterProps {
	router: any
}

const ApplicationRouter: React.FC<ApplicationRouterProps> = ({ router }) => {
	const Router = router;

	return (
		<Switch>
			<Route exact path='/login' component={ Login } />
			<Route exact path='/register' component={ Register } />
			<Route exact path='/logout' render={() => {
				return <h1>ok</h1>
			} } />
			<PrivateRoute exact path='/' component={ Inventory } />
		</Switch>
	)
};

export default ApplicationRouter;
