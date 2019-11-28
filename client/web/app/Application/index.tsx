import React from 'react';
import { Switch, Route } from 'react-router';
import Layout from '../Layout';

import { Accessories, Consumables, Dashboard, Inventory, Licenses, People, Reports, Settings } from './pages';
import { Companies, Departments }from './Settings/pages';

const Application = () => {
	return (
		<Layout>
			<Switch>
				<Route exact path={ ['/', `/inventory`] } component={ Inventory } />
				<Route path={ '/accessories' } component={ Accessories } />
				<Route path={ '/consumables' } component={ Consumables } />
				<Route path={ '/dashboard' } component={ Dashboard } />
				<Route path={ '/licenses' } component={ Licenses } />
				<Route path={ '/people' } component={ People } />
				<Route path={ '/reports' } component={ Reports } />
				<Route path={ '/settings' } render={ ({ match }) => (
					<>
						<Route exact path={ match.url } component={ Settings } />
						<Route path={ `${match.url}/companies` } component={ Companies } />
						<Route path={ `${match.url}/departments` } component={ Departments } />
					</>
				 ) } />
			</Switch>
		</Layout>
	);
};

export default Application;