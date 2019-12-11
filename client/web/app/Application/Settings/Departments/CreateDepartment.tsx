import React, { useState } from 'react';
import _ from 'lodash';

import { FormControl, TextField, Button } from '@material-ui/core';
import { useMutation } from 'react-apollo-hooks';
// import { DEPARTMENT_CREATE_MUTATION } from '@repo/common/graphql/mutations';
import { Redirect } from 'react-router';
import { useUser } from '@repo/common/Stores';

const CreateDepartment = () => {
	const [ departmentName, setDepartmentName ] = useState('');
	// const [ departmentCreate, { data } ] = useMutation(DEPARTMENT_CREATE_MUTATION);

	const user = useUser();

	const submitNewDepartment = () => {
		// DepartmentCreate({ variables: { name: departmentName } });
	};

	// if(_.has(data, 'departmentCreate.Department.id')) {
	// 	user.addDepartment(data.departmentCreate);
	// 	return <Redirect to='/settings/companies' />
	// }

	return (
		<>
			<h1>Create New Department</h1>

			<form id='newDepartmentForm'>
				<FormControl>
					<TextField 
						label='Department Name'
						value={ departmentName }
						onChange={ e => setDepartmentName(e.target.value) }
					/>
				</FormControl>
				<Button onClick={ submitNewDepartment }>Submit</Button>
			</form>
		</>
	);
};

export default CreateDepartment;