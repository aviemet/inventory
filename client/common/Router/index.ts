import { Platform } from 'react-native';

let Router: any;
if(Platform.OS === 'web') {
	Router = require('react-router-dom');
} else {
	Router = require('react-router-native');
}

export { Router };