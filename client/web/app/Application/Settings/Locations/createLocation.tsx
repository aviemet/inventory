import React, { useState } from 'react';
import _ from 'lodash';

import { FormControl, TextField, Button } from '@material-ui/core';
import { useMutation } from 'react-apollo-hooks';
import { LOCATION_CREATE_MUTATION } from '@repo/common/graphql/mutations';
import { Redirect } from 'react-router';
import { useUser } from '@repo/common/Stores';

const CreateLocation = () => {
	const [ locationName, setLocationName ] = useState('');
	const [ locationCreate, { data } ] = useMutation(LOCATION_CREATE_MUTATION);

	const user = useUser();

	const submitNewLocation = () => {
		locationCreate({ variables: { name: locationName } });
	};
	console.log({ data });

	if(_.has(data, 'locationCreate.id')) {
		return <Redirect to='/settings/locations' />
	}

	return (
		<>
			<h1>Create New Location</h1>

			<form id='newLocationForm'>
				<FormControl>
					<TextField 
						label='Location Name'
						value={ locationName }
						onChange={ e => setLocationName(e.target.value) }
					/>
				</FormControl>
				<Button onClick={ submitNewLocation }>Submit</Button>
			</form>
		</>
	);
};

export default CreateLocation;