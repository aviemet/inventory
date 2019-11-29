import React from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';

const CreateCompany = () => {

	const submitNewCompany = () => {
		const form = document.getElementById('newCompanyForm');
		console.log({ form });
	};

	return (
		<>
			<h1>Create New Company</h1>

			<form id='newCompanyForm'>
				<FormControl>
					<TextField label='Company Name' />
				</FormControl>
				<Button onClick={ submitNewCompany }>Submit</Button>
			</form>
		</>
	);
};

export default CreateCompany;