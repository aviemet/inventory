import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

import App from '@repo/common';
import Layout from './Layout';
import Routes from '@repo/common/Router/Routes';

export default () => {
	// Pass the dom-router elements to the common repo
	const webRouter = { Router, Switch, Route, Link, Redirect };

	return (
		<App>
			<Layout>
				<Routes router={ webRouter } />
			</Layout>
		</App>
	);
};
