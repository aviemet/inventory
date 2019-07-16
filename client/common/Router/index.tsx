import React from 'react'

import * as Auth from '../Auth';
import { Login, Register } from '../Auth';
import { Inventory } from '../Pages';

import { Platform } from 'react-native';

let ReactRouter: any;
let Router: any;
if(Platform.OS === 'web') {
	ReactRouter = require('react-router-dom');
	Router = ReactRouter.BrowserRouter;
} else {
	ReactRouter = require('react-router-native');
	Router = ReactRouter.NativeRouter;
}
const { Route, Switch, Redirect, Link } = ReactRouter;
console.log({ ReactRouter });

interface PrivateRouteType {
	component: React.ComponentType,
	path: String,
	exact: Boolean
};

const PrivateRoute: React.FC<PrivateRouteType> = ({ component: Component, ...rest }): any => (
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
				<PrivateRoute exact path='/' component={Inventory} />
				<Route path='/login' component={ Login } />
				<Route path='/register' component={ Register } />
			</Switch>
		</Router>
	)
};

export default ApplicationRouter;
