import React, { useEffect } from 'react';

import { Switch, Route } from 'react-router';
import * as Pages from '../Application/pages';
import * as Settings from '../Application/Settings/pages';
import { useUser } from '@repo/common/Stores';

import jwt from 'jsonwebtoken';
import { getCookie } from '@repo/common/Auth';
import { useMutation, useQuery } from 'react-apollo-hooks';
import GET_USER_QUERY from '@repo/common/graphql/queries/userQuery';

const decodeRailsCookie = cookie => {
	const encodedPayload = cookie.split('--')[0];
	const decodedPayload = JSON.parse(window.atob(encodedPayload));
	const originalValue = window.atob(decodedPayload._rails.message);
	return originalValue.replace(/"/g, '');
};

const AppRoutes = () => {
	const authToken = getCookie('auth_token');
	const refreshToken = getCookie('refresh_token');

	const user = useUser();

	let decode;
	if(authToken) {
		try {
			decode = jwt.decode(authToken);
		} catch(err) {
			console.log({ err });
		}
	} else if(refreshToken) {
		try {
			decode = jwt.decode(decodeRailsCookie(refreshToken));
		} catch(err) {
			console.log({ err });
		}
	}
	console.log({ decode });
	if(decode) {
		const userId = decode.uid;
		console.log({ userId });

		const { loading, error, data } = useQuery(GET_USER_QUERY, { 
			variables: { id: userId } 
		});

		if(!loading && data) {
			user.user = data.user[0];
		}

		console.log({ loading, error, data });
	}

	return (
		<Switch>
			<Route exact path={ ['/', `/inventory`] } component={ Pages.Inventory } />
			<Route path={ '/accessories' } component={ Pages.Accessories } />
			<Route path={ '/consumables' } component={ Pages.Consumables } />
			<Route path={ '/dashboard' } component={ Pages.Dashboard } />
			<Route path={ '/licenses' } component={ Pages.Licenses } />
			<Route path={ '/people' } component={ Pages.People } />
			<Route path={ '/reports' } component={ Pages.Reports } />
			<Route path={ '/settings' } render={ ({ match }) => (
				<>
					<Route exact path={ match.url } component={ Pages.Settings } />

					<Route exact path={ `${match.url}/companies` } component={ Settings.Companies } />
					<Route exact path={ `${match.url}/companies/create` } component={ Settings.CreateCompany } />

					<Route exact path={ `${match.url}/departments` } component={ Settings.Departments } />
				</>
				) } />
		</Switch>
	);
};

export default AppRoutes