import ApolloClient from 'apollo-boost';
import React from 'react';

import { ApolloProvider } from 'react-apollo-hooks';
// import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ThemeProvider } from 'react-native-elements';
import theme from './theme';

const client = new ApolloClient({
  // ssrMode: true,
  // By default, this client will send queries to the `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  // link: new HttpLink(),
	cache: new InMemoryCache(),
	credentials: 'include'
});

/**
 * Entry point for the application. This component is used as the root for the web and native 
 * entry files. Children must be a routing component which then nests the shared routes.
 * ? Could maybe be more readable if kept in /common using .native and .web extensions
 */
const App: React.FC = ({ children }) => {

	return(
		<ApolloProvider client={ client }>
			<ThemeProvider theme={ theme }>
				<>
					{ children }
				</>
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default App;
