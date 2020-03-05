import React from 'react';
import { NativeRouter as Router, Route, Link, Redirect } from "react-router-native";
import App from '@repo/common';
import { ThemeProvider } from 'react-native-elements';
import theme from '@repo/common/theme';

export default () => {
	return (
		<App>
			<ThemeProvider theme={ theme }>
			</ThemeProvider>
		</App>
	);
};