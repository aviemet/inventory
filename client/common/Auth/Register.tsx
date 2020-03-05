import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { useMutation } from 'react-apollo-hooks';
import { USER_CREATE_MUTATION } from '../graphql/mutations';

import { Button, Input } from 'react-native-elements';
import FormContainer from '@repo/common/Components/FormContainer';
import { Redirect } from 'react-router';
import { useUser } from '../Stores';



const Register: React.FC = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');

	const user = useUser();

	const [ userCreate, response ]: any = useMutation(USER_CREATE_MUTATION);

	const registerUser = async () => {
		if(password === confirmPassword && email) {
			await userCreate({
				variables: { email, password }
			});
		}
	}

	useEffect(() => {
		if(_.has(response, 'data.userCreate.id') && response.data.userCreate.id) {
			user.setUser(response.data.userCreate);
		}		
	}, [response.data]);

	useEffect(() => {
		if(response.error) {
			console.error(response.error);
		}
	}, [response.error]);

	return(
		<FormContainer onSubmit={ registerUser }>
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
		</FormContainer>
	);
}

export default Register;
