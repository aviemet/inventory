import { observable, computed } from 'mobx';
import { createContext } from 'react';

class UserStore {
	@observable user = null;

	@computed get userLoggedIn() {
		return this.user === null;
	}

	@computed get currentUser() {
		return {
			id: this.user
		};
	}

}

export default createContext(new UserStore());