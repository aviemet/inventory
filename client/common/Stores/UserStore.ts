import { observable, computed } from 'mobx';

export default class UserStore {
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