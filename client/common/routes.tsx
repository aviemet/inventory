import React from 'react';

import Login from './Auth/Login';
import Register from './Auth/Register';

interface RouterProps {
	children?: React.ReactNode,
	router: { Route: any, Switch: any, Link: any }
}

const Routes: React.FC<RouterProps> = ({ router }) => {
	const { Route, Switch, Link } = router;

	return(
		<>
			<Switch>
				<Route exact path='/' component={ Login } />
				<Route path='/register' component={ Register } />
			</Switch>
		</>
	);
};

export default Routes;