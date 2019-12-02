import { observable, computed, action } from 'mobx';

export default class UserStore {
	@observable user: object;

	@computed get loggedIn() {
		return this.user === null;
	}

}