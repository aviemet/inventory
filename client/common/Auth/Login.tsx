import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { Button } from 'react-native-elements';

const Login: React.FC = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const loginUser = () => {

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
				onPress={loginUser}
				accessibilityLabel="Login User"
			/>
		</>
	);
}

export default Login;
