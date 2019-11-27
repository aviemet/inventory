import React from 'react';
import './styles.less';
import styled from 'styled-components';

const WebLayout: React.FC = ({ children }) => {
	return (
		<WebLayoutContainer>
			{ children }
		</WebLayoutContainer>
	);
};

const WebLayoutContainer = styled.div`
	max-width: 1100px;
	margin: 0 auto;
`;

export default WebLayout;