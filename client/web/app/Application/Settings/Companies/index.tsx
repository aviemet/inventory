import React from 'react';

import { Link } from 'react-router-dom';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { COMPANIES_QUERY } from '@repo/common/graphql/queries';
import { COMPANY_DELETE_MUTATION } from '@repo/common/graphql/mutations';

import { Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useUser } from '@repo/common/Stores';

interface CompanyType {
	id: string,
	name: string,
}

const Companies: React.FC = () => {
	const user = useUser();
	
	const { loading, error, data: companiesQueryResult } = useQuery(COMPANIES_QUERY);
	if(companiesQueryResult) console.log({ companiesQueryResult });

	const [ companyDelete, { data: companyDeleteResult } ] = useMutation(COMPANY_DELETE_MUTATION);
	if(companyDeleteResult) console.log({ companyDeleteResult });
	
	const deleteCompany = id => () => {
		companyDelete({ 
			variables: { id },
			update: (store, { data }) => {
				user.deleteCompany(data);
				console.log({ store, data });
			},
			refetchQueries: [{ query: COMPANIES_QUERY }]
		});
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
							<TableCell>Locations</TableCell>
							<TableCell>Departments</TableCell>
							<TableCell>Users</TableCell>
							<TableCell>Assets</TableCell>
							<TableCell>Licenses</TableCell>
							<TableCell>Accessories</TableCell>
							<TableCell>Consumeables</TableCell>
							<TableCell>Vendors</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{ !loading && !error && companiesQueryResult.companies.map(company => (
							<TableRow key={ company.id }>
								<TableCell>{ company.name }</TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell>
									<IconButton onClick={ deleteCompany(company.id) }>
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

export default Companies;