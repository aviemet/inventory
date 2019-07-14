import React from 'react';

import Login from './Auth/Login';

interface RouterProps {
	children?: React.ReactNode,
	router: { Route: any, Switch: any, Link: any }
}

const Routes: React.FC<RouterProps> = ({ router }) => {
	const { Route, Switch, Link} = router;

	return(
		<>
			<Route path='/' component={ Login } />
		</>
	);
};

export default Routes;