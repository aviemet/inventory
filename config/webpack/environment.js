const { environment } = require('@rails/webpacker');
const typescript =  require('./loaders/typescript');
const less = require('./loaders/less');
const path = require('path');

environment.loaders.prepend('typescript', typescript);

environment.config.merge({
	resolve: {
		alias: {
			'react-native$': 'react-native-web'
		},
		extensions: ['.jsx', '.js', '.tsx', '.ts'],
		modules: [
			path.resolve('/node_modules'),
			path.resolve('/client')
		]
	}
});

environment.loaders.append('less', less);

module.exports = environment;
