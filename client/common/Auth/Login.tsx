import React, { useState } from 'react';

import { useMutation } from 'react-apollo-hooks';
import { USER_LOGIN_MUTATION } from '../graphql/mutations';

import { TextInput } from 'react-native';
import { Button } from 'react-native-elements';

const Login: React.FC = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const [ userLogin, response ]: any = useMutation(USER_LOGIN_MUTATION);

	const handleLogin = async () => {
		if(password && email) {
			const auth = await userLogin({
				variables: { email, password }
			});
			if(auth) {
				console.log({auth});
			} else {
				// TODO: Display error
			}
		}
	}

	return(
		<>
			<TextInput
				placeholder="Email"
				onChangeText={text => setEmail(text)}
				value={email}
			/>
			<TextInput
				placeholder="Password"
				secureTextEntry={true}
				onChangeText={text => setPassword(text)}
				value={password}
			/>
			<Button
				title="Login"
				onPress={handleLogin}
				accessibilityLabel="Login User"
			/>
		</>
	);
}

export default Login;
