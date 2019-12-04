import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { useUser } from '@repo/common/Stores';
import { Redirect } from 'react-router';

const AuthLayout = observer(({ children }) => {
	const user = useUser();

	if(user.isLoggedIn) {
		// return <Redirect to='/' />
	}

	return (
		<Container>
			{ children }
		</Container>
	);
});

const Container = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	& > div {
		border-radius: 10px;
		box-shadow: 1px 1px 5px #AAA;
		border: 1px solid #AAA;
		padding: 10px;
	}
`;

export default AuthLayout;