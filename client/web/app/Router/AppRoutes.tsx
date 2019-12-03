import React, { useEffect } from 'react';

import { Switch, Route } from 'react-router';
import * as Pages from '../Application/pages';
import * as Settings from '../Application/Settings/pages';
import { useUser } from '@repo/common/Stores';

import jwt from 'jsonwebtoken';
import { getCookie, decodeRailsCookie } from '@repo/common/Auth';
import { useMutation, useQuery } from 'react-apollo-hooks';
import GET_USER_QUERY from '@repo/common/graphql/queries/userQuery';

const AppRoutes = () => {
	const authToken = getCookie('auth_token');
	const refreshToken = getCookie('refresh_token');
	console.log({ authToken, refreshToken });

	const user = useUser();

	let decode;
	try{
		// Decode either the auth token or the refresh token
		if(authToken) {
			decode = jwt.decode(decodeRailsCookie(authToken));
		} else if(refreshToken) {
			decode = jwt.decode(decodeRailsCookie(refreshToken));
		}
	} catch(err) {
		console.error("Token decode error: ", { err });
	} finally {
		console.log({ decode });
		if(decode) {
			const userId = decode.uid;
	
			// Get the user
			const { loading, error, data } = useQuery(GET_USER_QUERY, { 
				variables: { id: userId } 
			});

			console.log({ loading, error, data });

			// Save in Mobx data store
			if(!loading && data) {
				user.user = data.user[0];
			}
			console.log({ user: user.user });
		}
	}

	return (
		<Switch>
			<Route exact path={ ['/', `/inventory`] } component={ Pages.Inventory } />
			<Route path={ '/accessories' } component={ Pages.Accessories } />
			<Route path={ '/consumables' } component={ Pages.Consumables } />
			<Route path={ '/dashboard' } component={ Pages.Dashboard } />
			<Route path={ '/licenses' } component={ Pages.Licenses } />
			<Route path={ '/people' } component={ Pages.People } />
			<Route path={ '/vendors' } component={ Pages.Vendors } />
			<Route path={ '/purchases' } component={ Pages.Purchases } />
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