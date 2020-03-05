import React from 'react';

import { Switch, Route } from 'react-router';
import * as Pages from '../Application/pages';
import * as Settings from '../Application/Settings/pages';

const AppRoutes = () => {
	return (
		<Switch>
			<Route exact path={ ['/', '/dashboard'] } component={ Pages.Dashboard } />
			<Route path={ '/inventory' } component={ Pages.Inventory } />
			<Route path={ '/accessories' } component={ Pages.Accessories } />
			<Route path={ '/consumables' } component={ Pages.Consumables } />
			<Route path={ '/licenses' } component={ Pages.Licenses } />
			<Route path={ '/people' } component={ Pages.People } />
			<Route path={ '/vendors' } component={ Pages.Vendors } />
			<Route path={ '/purchases' } component={ Pages.Purchases } />
			<Route path={ '/reports' } component={ Pages.Reports } />
			<Route path={ '/settings' } render={ ({ match }) => (
				<>
					<Route exact path={ match.url } component={ Pages.Settings } />

					<Route exact path={ `${match.url}/user` } component={ Settings.User } />

					<Route exact path={ `${match.url}/companies` } component={ Settings.Companies } />
					<Route exact path={ `${match.url}/companies/create` } component={ Settings.CreateCompany } />
					
					<Route exact path={ `${match.url}/locations` } component={ Settings.Locations } />
					<Route exact path={ `${match.url}/locations/create` } component={ Settings.CreateLocation } />

					<Route exact path={ `${match.url}/departments` } component={ Settings.Departments } />
					<Route exact path={ `${match.url}/departments/create` } component={ Settings.CreateDepartment } />
				</>
				) } />
		</Switch>
	);
};

export default AppRoutes