import { observable, computed, action } from 'mobx';

interface UserObject {
	id: string,
	email: string,
	person: object
}

export default class UserStore {
	@observable user: UserObject;

	@computed get isLoggedIn(): boolean {
		return !!this.user;
	}

}