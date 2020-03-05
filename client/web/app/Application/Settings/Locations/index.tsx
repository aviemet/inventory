import React from 'react';

import { Link } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { LOCATIONS_QUERY } from '@repo/common/graphql/queries';

import { Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Locations = () => {
	const { loading, error, data } = useQuery(LOCATIONS_QUERY, {
		fetchPolicy: 'no-cache'
	});

	const deleteLocation = id => () => {
		console.log({ id });
	}
	
	return (
		<>
			<h1>Locations</h1>
			<Link to='/settings/locations/create'>Create New Location</Link>

			<Paper>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Locations</TableCell>
							<TableCell>Departments</TableCell>
							<TableCell>Employees</TableCell>
							<TableCell>Assets</TableCell>
							<TableCell>Accessories</TableCell>
							<TableCell>Consumeables</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{ !loading && !error && data.locations.map(location => (
							<TableRow key={ location.id }>
								<TableCell>{ location.name }</TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell>
									<IconButton onClick={ deleteLocation(location.id) }>
										<DeleteIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
			
		</>
	);
};

export default Locations;