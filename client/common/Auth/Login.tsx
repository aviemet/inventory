import React, { useState } from 'react';
import { Redirect } from 'react-router';

import { UserStore } from '../stores';

import { useMutation } from 'react-apollo-hooks';
import { USER_LOGIN_MUTATION } from '../graphql/mutations';

import { TextInput } from 'react-native';
import { Button } from 'react-native-elements';

const Login: React.FC<any> = (props): any => {
	console.log({state: props.location.state});
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
				// UserStore.user = auth.user;

				if(props.location.state) {
					setReferer(props.location.state.from.pathname);
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
