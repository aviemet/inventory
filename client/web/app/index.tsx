import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import App from '@repo/common';
import Routes from '@repo/common/routes';

export default () => (
	<App>
		<BrowserRouter>
			<Routes router={{Route, Switch, Link}} />
		</BrowserRouter>
	</App>
);
