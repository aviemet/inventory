import React from 'react';
import ApolloClient from 'apollo-boost';

import { ApolloProvider } from 'react-apollo-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ThemeProvider } from 'react-native-elements';
import theme from './theme';
import DataProvider from './Stores';
import ApplicationRouter from './Router/Routes';

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
				<DataProvider>
					<ApplicationRouter />
				</DataProvider>
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default App;