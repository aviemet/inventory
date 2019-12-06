import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { useQuery } from 'react-apollo-hooks';
import { COMPANIES_QUERY } from '@repo/common/graphql/queries';

const Companies = () => {
	const { loading, error, data } = useQuery(COMPANIES_QUERY, {
		fetchPolicy: 'no-cache'
	});

	if(!loading) {
		console.log({ error, data });
	}

	return (
		<>
			<h1>Companies</h1>
			<Link to='/settings/companies/create'>Create New Company</Link>

			<Paper>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Company Name</TableCell>
							<TableCell>Users</TableCell>
							<TableCell>Assets</TableCell>
							<TableCell>Licenses</TableCell>
							<TableCell>Accessories</TableCell>
							<TableCell>Consumeables</TableCell>
							<TableCell>Vendors</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{ !loading && !error && data.companies.map(company => (
							<TableRow key={ company.id }>
								<TableCell>{ company.name }</TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
			
		</>
	);
};

export default Companies;