import React from 'react';
import styled from 'styled-components';

const AuthLayout = ({ children }) => {

	return (
		<Container>
			{ children }
		</Container>
	);
};

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