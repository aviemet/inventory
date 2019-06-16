import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Text, View } from 'react-native';

const client = new ApolloClient({ uri: '127.0.0.1' });

const App: React.FC = () => {

	return(
		<ApolloProvider client={client}>
			<View>
				<Text>Hello React Native Web</Text>
			</View>
		</ApolloProvider>
	);
}

export default App;
