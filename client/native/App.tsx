import React from 'react';
import * as Router from 'react-router-native';

import App from '@repo/common';
import Routes from '@repo/common/routes';

export default () => (
	<App>
		<Router.NativeRouter>
			<Routes router={Router} />
		</Router.NativeRouter>
	</App>
);
