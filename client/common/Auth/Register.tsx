import React, { useState } from 'react';

import { useMutation } from 'react-apollo-hooks';
import { USER_CREATE_MUTATION } from '../graphql/mutations';

import { TextInput } from 'react-native';
import { Button } from 'react-native-elements';

const Register: React.FC = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');

	const [ userCreate, response ]: any = useMutation(USER_CREATE_MUTATION);

	const registerUser = async () => {
		if(password === confirmPassword && email) {
			const user = await userCreate({
				variables: { email, password }
			});
			console.log({user, response});
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
			<TextInput
				placeholder="Password again"
				secureTextEntry={true}
				onChangeText={text => setConfirmPassword(text)}
				value={confirmPassword}
			/>
			<Button
				title="Register"
				onPress={registerUser}
				accessibilityLabel="Register User"
			/>
		</>
	);
}

export default Register;
