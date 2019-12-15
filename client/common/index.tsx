import React from 'react';
import ApolloClient from 'apollo-boost';

import { ApolloProvider } from 'react-apollo-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';

import DataProvider from './Stores';

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  // ssrMode: true,
  // By default, this client will send queries to the `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
	// link: new HttpLink(),
	cache: cache
});

const App: React.FC = ({ children }) => {

	return(
		<ApolloProvider client={ apolloClient }>
			<DataProvider>
				{ children }
			</DataProvider>
		</ApolloProvider>
	);
}

export default App;