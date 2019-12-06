import React, { useState } from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';
import { useMutation } from 'react-apollo-hooks';
import { COMPANY_CREATE_MUTATION } from '@repo/common/graphql/mutations';

const CreateCompany = () => {
	const [ companyName, setCompanyName ] = useState('');
	const [ companyCreate, { data } ] = useMutation(COMPANY_CREATE_MUTATION);

	const submitNewCompany = () => {
		companyCreate({ variables: { name: companyName } });
		console.log({ companyName, data });
	};

	return (
		<>
			<h1>Create New Company</h1>

			<form id='newCompanyForm'>
				<FormControl>
					<TextField 
						label='Company Name'
						value={ companyName }
						onChange={ e => setCompanyName(e.target.value) }
					/>
				</FormControl>
				<Button onClick={ submitNewCompany }>Submit</Button>
			</form>
		</>
	);
};

export default CreateCompany;