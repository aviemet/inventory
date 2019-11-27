import React from 'react'
import { useCookies } from 'react-cookie';
import { useUser } from '../Stores';

import * as Auth from '../Auth';
import { Login, Register } from '../Auth';
import { Inventory } from '../Pages';

/**
 * Main Router for the application. Accpets an object of React Router elements.
 * The Router object must be renamed as Router, i.e. BrowserRouter as Router when destructuring from the import.
 * This allows the component to create routes which work on both web and native in the same code base.
 * @param router
 */
const ApplicationRouter: React.FC<ApplicationRouterProps> = ({ router }) => {
	const { Router, Route, Switch, Redirect } = router;
	const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
	const user = useUser();

	/**
	 * This component is nested so the Router object passed to ApplicationRouter is in scope.
	 * Renders the login page if no user is logged in, redirects to passwed component otherwise.
	 * @param component The component to render when user is logged in
	 * @param rest Any other props will be sent to the Route object
	 */
	const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => { console.log({ rest }); return (
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
	)};

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
				<PrivateRoute exact path='/' component={ Inventory } />
			</Switch>
		</Router>
	)
};

interface PrivateRouteProps {
	component: React.ComponentType,
	[rest: string]: any
};

interface ApplicationRouterProps {
	router: any
}

export default ApplicationRouter;
