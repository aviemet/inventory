const { environment } = require('@rails/webpacker');
const typescript =  require('./loaders/typescript');

environment.loaders.prepend('typescript', typescript);

environment.config.merge({
	resolve: {
		alias: {
			'react-native$': 'react-native-web'
		}
	}
});

module.exports = environment;
