import React, { useState } from 'react';
import _ from 'lodash';

import { FormControl, TextField, Button, Select, MenuItem } from '@material-ui/core';
import { useMutation, useQuery } from 'react-apollo-hooks';
import { LOCATION_CREATE_MUTATION } from '@repo/common/graphql/mutations';
import { LOCATIONS_QUERY } from '@repo/common/graphql/queries';
import { Redirect } from 'react-router';
import { useUser } from '@repo/common/Stores';

const CreateLocation = () => {
	const [ locationName, setLocationName ] = useState('');
	const [ locationParent, setLocationParent ] = useState('');

	const { loading, error, data: locationsResult } = useQuery(LOCATIONS_QUERY, {
		fetchPolicy: 'no-cache'
	});

	const [ locationCreate, { data: createLocationResult } ] = useMutation(LOCATION_CREATE_MUTATION);

	const user = useUser();

	const submitNewLocation = () => {
		locationCreate({ variables: { name: locationName, parent: locationParent } });
	};

	if(_.has(createLocationResult, 'locationCreate.id')) {
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
					<Select
						labelId='locationParent'
						value={ locationParent }
						onChange={ e => setLocationParent(e.target.value as string) }
					>
						<MenuItem value=''><em>None</em></MenuItem>
						{ !loading && !error && locationsResult.locations.map(location => (
							<MenuItem key={ location.id } value={ location.id }>{ location.name }</MenuItem>
						) ) }
					</Select>
				</FormControl>
				<Button onClick={ submitNewLocation }>Submit</Button>
			</form>
		</>
	);
};

export default CreateLocation;