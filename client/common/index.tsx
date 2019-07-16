import ApolloClient from 'apollo-boost';
import React from 'react';

import { ApolloProvider } from 'react-apollo-hooks';
// import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ThemeProvider } from 'react-native-elements';
import theme from './theme';

import * as Auth from './Auth';
import { Login, Register } from './Auth';
import { Inventory } from './Pages';

// import { Router } from './Router';
// import Routes from './Router/routes';
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


const client = new ApolloClient({
  // ssrMode: true,
  // By default, this client will send queries to the `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  // link: new HttpLink(),
	cache: new InMemoryCache(),
	credentials: 'include'
});

interface PrivateRouteType {
	component: React.ReactNode,
	path: String,
	exact: Boolean
};

const PrivateRoute: React.FC<PrivateRouteType> = ({ component: Component, ...rest }: any) => (
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
 * Entry point for the application. This component is used as the root for the web and native 
 * entry files. Children must be a routing component which then nests the shared routes.
 * ? Could maybe be more readable if kept in /common using .native and .web extensions
 */
const App: React.FC = () => {

	return(
		<ApolloProvider client={ client }>
			<ThemeProvider theme={ theme }>
				<Router>
					<Switch>
						<PrivateRoute exact path='/' component={Inventory} />
						<Route path='/login' component={ Login } />
						<Route path='/register' component={ Register } />
					</Switch>
				</Router>
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default App;
