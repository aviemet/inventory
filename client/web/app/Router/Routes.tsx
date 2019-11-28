import React from 'react'
import { useCookies } from 'react-cookie';
import { useUser } from '@repo/common/Stores';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import * as Auth from '@repo/common/Auth';
import { Login, Register } from '@repo/common/Auth';
import Application from '../Application';

/**
 * Renders the login page if no user is logged in, redirects to passwed component otherwise.
 * @param component The component to render when user is logged in
 * @param rest Any other props will be sent to the Route object
 */
const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => (
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

/**
 * Main Router for the application. 
 */
const ApplicationRouter: React.FC<ApplicationRouterProps> = () => {
	const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
	const user = useUser();

	return (
		<Router>
			<Switch>
				<Route exact path='/login' component={ Login } />
				<Route exact path='/register' component={ Register } />
				<Route exact path='/logout' render={() => {
					removeCookie('auth_token');
					removeCookie('refresh_token');
					user.user = undefined;
					return <Redirect to='/login' />
				} } />
				<PrivateRoute path='/' component={ Application } />
			</Switch>
		</Router>
	)
};

interface PrivateRouteProps {
	component: React.ComponentType,
	[rest: string]: any
};

interface ApplicationRouterProps {
}

export default ApplicationRouter;
