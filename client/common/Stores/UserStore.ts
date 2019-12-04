import { observable, computed, action } from 'mobx';

export default class UserStore {
	@observable user: object;

	@computed get isLoggedIn(): boolean {
		return this.user !== null;
	}

}