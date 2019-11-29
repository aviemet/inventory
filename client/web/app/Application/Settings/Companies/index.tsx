import React from 'react';
import { Link } from 'react-router-dom';

const Companies = () => {

	return (
		<>
			<h1>Companies</h1>
			<Link to='/settings/companies/create'>Create New Company</Link>
		</>
	);
};

export default Companies;