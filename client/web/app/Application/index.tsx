import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router';
import Layout from '../Layout';

import Accessories from '../Application/Accessories';
import Consumables from '../Application/Consumables';
import Dashboard from '../Application/Dashboard';
import Inventory from '../Application/Inventory';
import Licenses from '../Application/Licenses';
import People from '../Application/People';
import Reports from '../Application/Reports';
import Settings from '../Application/Settings';

const Application = () => {
	const match = useRouteMatch();

	return (
		<Layout>
			<Switch>
				<Route exact path={ ['/', `/inventory`] } component={ Inventory } />
				<Route exact path={ `/accessories` } component={ Accessories } />
				<Route exact path={ `/consumables` } component={ Consumables } />
				<Route exact path={ `/dashboard` } component={ Dashboard } />
				<Route exact path={ `/licenses` } component={ Licenses } />
				<Route exact path={ `/people` } component={ People } />
				<Route exact path={ `/reports` } component={ Reports } />
				<Route exact path={ `/settings` } component={ Settings } />
			</Switch>
		</Layout>
	);
};

export default Application;