import App from '../app';
import { AppRegistry } from 'react-native';
import * as serviceWorker from '../serviceWorker';

// register the app
AppRegistry.registerComponent('App', () => App);

document.addEventListener('DOMContentLoaded', () => {
	AppRegistry.runApplication('App', {
		initialProps: {},
		rootTag: document.getElementById('app')
	});
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
