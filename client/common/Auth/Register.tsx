import React, { useState } from 'react';

import { useMutation } from 'react-apollo-hooks';
import { USER_CREATE_MUTATION } from '../graphql/mutations';

import { Button, Input } from 'react-native-elements';

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
			if(user) {
				// TODO: Log in new user
			} else {
				// TODO: Display error
			}
		}
	}

	return(
		<>
			<Input
				placeholder="Email"
				onChangeText={ text => setEmail(text) }
				value={ email }
			/>
			<Input
				placeholder="Password"
				secureTextEntry={ true }
				onChangeText={ text => setPassword(text) }
				value={ password }
			/>
			<Input
				placeholder="Password again"
				secureTextEntry={ true }
				onChangeText={ text => setConfirmPassword(text) }
				value={ confirmPassword }
			/>
			<Button
				title="Register"
				onPress={ registerUser }
				accessibilityLabel="Register User"
			/>
		</>
	);
}

export default Register;
