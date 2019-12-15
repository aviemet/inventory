import React from 'react';
import _ from 'lodash';

import { Link } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { DEPARTMENTS_QUERY } from '@repo/common/graphql/queries';

import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Departments = () => {
	const { loading, error, data } = useQuery(DEPARTMENTS_QUERY, {
		fetchPolicy: 'no-cache'
	});
	
	const deleteDepartment = id => () => {
		console.log({ id });
	}
	
	return (
		<>
			<h1>Departments</h1>
			<Link to='/settings/departments/create'>Create New Department</Link>

			<Paper>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Departments</TableCell>
							<TableCell>Location</TableCell>
							<TableCell>Employees</TableCell>
							<TableCell>Assets</TableCell>
							<TableCell>Accessories</TableCell>
							<TableCell>Consumeables</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{ !loading && !error && data.departments.map(department => (
							<TableRow key={ department.id }>
								<TableCell>{ department.name }</TableCell>
								<TableCell>{ _.has(department, 'location.name') && department.location.name }</TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell>
									<IconButton onClick={ deleteDepartment(department.id) }>
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

export default Departments;