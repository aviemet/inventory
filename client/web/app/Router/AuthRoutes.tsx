import React, { useEffect } from 'react'
import _ from 'lodash';

import { useUser } from '@repo/common/Stores';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { LOGGED_IN_USER_QUERY } from '@repo/common/graphql/queries';
import { useQuery } from 'react-apollo-hooks';

import { Login, Register } from '@repo/common/Auth';
import AuthLayout from '../Layout/AuthLayout';
import Application from '../Application';
import { observer } from 'mobx-react';
import Loading from '../Components/Loading';
import { toJS } from 'mobx';

/**
 * Top level Router for the application. 
 */
const AuthRouter: React.FC<AuthRouterProps> = observer(() => {
	const user = useUser();
	
	// On each page load, fetch user data from server using auth cookies to authenticate
	const { loading, error, data } = useQuery(LOGGED_IN_USER_QUERY, {});
	useEffect(() => {
		if(!loading && !error && data) {
			user.setUser(data.loggedInUser);
		}
	}, [loading, error, data]);

	/**
	 * Renders the login page if no user is logged in, redirects to passwed component otherwise.
	 * @param component The component to render when user is logged in
	 * @param rest Any other props will be sent to the Route object
	 */
	const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => (
		<Route { ...rest } render={ (props: any) => {
			if(loading) {
				return <Loading />
			}
			if(user.isLoggedIn || _.has(data, 'loggedInUser.id')) {
				return <Component { ...props } />
			} else {
				return <Redirect to={ {
					pathname: '/login',
					state: { from: props.location }
				} } />
			}
		} } />
	);

	return (
		<Router>
			<Switch>
				<Route exact path='/login' render={ matchProps => <AuthLayout><Login { ...matchProps } /></AuthLayout> } />
				<Route exact path='/register' render={ () => <AuthLayout><Register /></AuthLayout> } />

				{/* Logout is now handled by rails

				<Route exact path='/logout' render={ () => {
					removeCookie('auth_token');
					removeCookie('refresh_token');
					user.unsetUser();
					return <Redirect to='/login' />
				} } />
				*/}
				<PrivateRoute path='/' component={ Application } />
			</Switch>
		</Router>
	)
});

interface PrivateRouteProps {
	component: React.ComponentType,
	[rest: string]: any
};

interface AuthRouterProps {
}

export default AuthRouter;
