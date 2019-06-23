import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { View } from 'react-native';
import Login from './Auth/Login';

const client = new ApolloClient({ uri: '127.0.0.1' });

const App: React.FC = () => {

	return(
		<ApolloProvider client={client}>
			<View>
				<Login />
			</View>
		</ApolloProvider>
	);
}

export default App;
