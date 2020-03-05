import React, { useState } from 'react';
import _ from 'lodash';

import { FormControl, TextField, Button } from '@material-ui/core';
import { useMutation } from 'react-apollo-hooks';
import { COMPANY_CREATE_MUTATION } from '@repo/common/graphql/mutations';
import { COMPANIES_QUERY } from '@repo/common/graphql/queries';
import { Redirect } from 'react-router';
import { useUser } from '@repo/common/Stores';

const CreateCompany = () => {
	const [ companyName, setCompanyName ] = useState('');
	const [ doRedirect, setDoRedirect ] = useState(false);
	const [ companyCreate, { data } ] = useMutation(COMPANY_CREATE_MUTATION);

	const user = useUser();

	const submitNewCompany = e => {
		e.preventDefault();
		companyCreate({ 
			variables: { name: companyName },
			update: (cache, { data: { companyCreate } }) => {
				const { companies } = cache.readQuery({ 
					query: COMPANIES_QUERY 
				});
				cache.writeQuery({
					query: COMPANIES_QUERY,
					data: { companies: companies.concat([companyCreate]) }
				});
			},
			refetchQueries: ['getCompanies']
		}).then(({ data: { companyCreate } }) => {
			user.addCompany({ ...companyCreate });
			setDoRedirect(true);
		});
	};

	if(doRedirect) return <Redirect to='/settings/companies' />;

	return (
		<>
			<h1>Create New Company</h1>

			<form id='newCompanyForm' onSubmit={ submitNewCompany }>
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