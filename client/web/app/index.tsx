import React from 'react';
import { CookiesProvider } from 'react-cookie';

import App from '@repo/common';
import Routes from './Router/AuthRoutes';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import muiTheme from './Layout/muiTheme';
import scTheme from './Layout/styledComponentsTheme';

export default () => {
	return (
		<App>
			<CookiesProvider>
				<MuiThemeProvider theme={ muiTheme }>
					<SCThemeProvider theme={ scTheme }>
						<Routes />
					</SCThemeProvider>
				</MuiThemeProvider>
			</CookiesProvider>
		</App>
	);
};
