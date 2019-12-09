import React, { useState } from 'react';
import _ from 'lodash';

import { FormControl, TextField, Button } from '@material-ui/core';
import { useMutation } from 'react-apollo-hooks';
import { COMPANY_CREATE_MUTATION } from '@repo/common/graphql/mutations';
import { Redirect } from 'react-router';
import { useUser } from '@repo/common/Stores';

const CreateCompany = () => {
	const [ companyName, setCompanyName ] = useState('');
	const [ companyCreate, { data } ] = useMutation(COMPANY_CREATE_MUTATION);

	const user = useUser();

	const submitNewCompany = () => {
		companyCreate({ variables: { name: companyName } });
	};

	console.log({ data });

	if(_.has(data, 'companyCreate.company.id')) {
		user.addCompany(data.companyCreate);
		return <Redirect to='/settings/companies' />
	}

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