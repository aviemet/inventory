import { observable, computed, action } from 'mobx';

export default class UserStore {
	@observable private _user: object;

	@action user(user) {
		this._user = user;
	}

	@computed get userLoggedIn() {
		return this._user === null;
	}

	@computed get currentUser() {
		return {
			id: this._user
		};
	}

}