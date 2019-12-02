import Login from './Login';
import Register from './Register';

export const decodeRailsCookie = cookie => {
	const encodedPayload = cookie.split('--')[0];
	const decodedPayload = JSON.parse(window.atob(encodedPayload));
	const originalValue = window.atob(decodedPayload._rails.message);
	return originalValue.replace(/"/g, '');
};

export function getCookie(cname: string) {
	var name = cname + "=";
	var ca = document.cookie.split(';');

	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) == 0) {
			return c.substring(name.length,c.length);
		} 
	}

	return "";
}

export const isLoggedIn = () => {
	return !!getCookie("refresh_token");
}

export { Login, Register }