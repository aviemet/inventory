import React from 'react';
import { CookiesProvider } from 'react-cookie';

import App from '@repo/common';
import Routes from './Router/Routes';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Layout/theme';

export default () => {
	return (
		<App>
			<CookiesProvider>
				<ThemeProvider theme={ theme }>
					<Routes />
				</ThemeProvider>
			</CookiesProvider>
		</App>
	);
};
