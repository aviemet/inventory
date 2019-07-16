import React from 'react';
import * as Router from 'react-router-dom'

import App from '@repo/common';
import Routes from '@repo/common/routes';

export default () => (
	<App>
		<Router.BrowserRouter>
			<Routes router={Router} />
		</Router.BrowserRouter>
	</App>
);
