import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router';

import { useUser } from '../Stores';

import { useMutation } from 'react-apollo-hooks';
import { USER_LOGIN_MUTATION } from '../graphql/mutations';

import { Button, Input } from 'react-native-elements';
import FormContainer from '@repo/common/Components/FormContainer';

const Login: React.FC<any> = (props): any => {
	const user = useUser();
	
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const [ redirect, setRedirect ] = useState(false);
	const [ referer, setReferer ] = useState('/');

	const [ userLogin, response ]: any = useMutation(USER_LOGIN_MUTATION);

	const handleLogin = async () => {
		if(password && email) {
			const auth = await userLogin({
				variables: { email, password }
			});
			if(auth) {
				user.user = auth.user;
				if(props.location.state) {
					setReferer(props.location.state.from.pathname || '/');
				}
				setRedirect(true);
			} else {
				// TODO: Display error
			}
		}
	}

	if(redirect) {
		return <Redirect to={referer} />
	}

	return(
		<FormContainer onSubmit={ handleLogin }>
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
			<Button
				title="Login"
				onPress={ handleLogin }
				accessibilityLabel="Login User"
			/>
		</FormContainer>
	);
}

export default Login;
