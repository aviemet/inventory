import Login from './Login';
import Register from './Register';

export const decodeRailsCookie = cookie => {
	const encodedPayload = cookie.split('--')[0];
	const decodedPayload = JSON.parse(base64Decode(encodedPayload));
	const originalValue = base64Decode(decodedPayload._rails.message).replace(/"/g, '');
	return originalValue;
};

// I don't like having to do it this way
const base64Decode = (str: string): string => {
	const parts = str.split('%');
	let index = 0;
	if(parts.length > 1) {
		let largest = parts[0].length;
		for(let i = 1; i < parts.length; i++) {
			if(parts[i].length > largest) {
				index = i;
				largest = parts[index].length;
			}
		}
	}
	return window.atob(parts[index]);
}

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