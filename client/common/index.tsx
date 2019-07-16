import ApolloClient from 'apollo-boost';
import React from 'react';

import { ApolloProvider } from 'react-apollo-hooks';
// import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ThemeProvider } from 'react-native-elements';
import theme from './theme';

import ApplicationRouter from './Router';

const client = new ApolloClient({
  // ssrMode: true,
  // By default, this client will send queries to the `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  // link: new HttpLink(),
	cache: new InMemoryCache(),
	credentials: 'include'
});

const App: React.FC = () => {

	return(
		<ApolloProvider client={ client }>
			<ThemeProvider theme={ theme }>	
				<ApplicationRouter />
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default App;
