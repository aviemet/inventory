import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, IconButton } from '@material-ui/core';
import { useQuery } from 'react-apollo-hooks';
import { DEPARTMENTS_QUERY } from '@repo/common/graphql/queries';
import red from '@material-ui/core/colors/red';

const Departments = () => {
	const { loading, error, data } = useQuery(DEPARTMENTS_QUERY, {
		fetchPolicy: 'no-cache'
	});

	console.log({ loading, error, data});
	
	return (
		<>
			<h1>Departments</h1>
			<Link to='/settings/departments/create'>Create New Department</Link>

			<Paper>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Departments</TableCell>
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
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell>
									<IconButton name='trash' color={ red[0] } />
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