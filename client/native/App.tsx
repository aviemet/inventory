import React from 'react';
import { NativeRouter, Route, Switch, Link } from 'react-router-native'

import App from '@repo/common';
import Routes from '@repo/common/routes';

export default () => (
	<App>
		<NativeRouter>
			<Routes
				router={{Route, Switch, Link}}
			/>
		</NativeRouter>
	</App>
);
