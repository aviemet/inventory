import React from 'react'
import styled from 'styled-components';

interface FormContainerProps {
	onSubmit: Function,
	children: any
}

const FormContainer: React.FC<FormContainerProps> = ({ onSubmit, children }) => {
	const handleEnter = e => {
		if(e.key === 'Enter') {
			onSubmit();
		}
	};

	return (
		<div onKeyPress={ handleEnter }>
			{ children }
		</div>
	);
};

export default FormContainer;