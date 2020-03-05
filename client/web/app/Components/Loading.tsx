import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const Loading = () => {
	return (
		<LoadingWrapper>
			<CircularProgress />
		</LoadingWrapper>
	);
};

const LoadingWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Loading;
