import { observable, computed, action, extendObservable } from 'mobx';

interface CompanyType {
	company: {
		id: string,
		name: string
	},
	role: {
		id: string,
		name: string
	}
}

export default class UserStore {
	@observable id: string;
	@observable email: string;
	@observable person: object;
	@observable companies: Array<CompanyType>;
	@observable activeCompany: string;

	@action
	setUser(user) {
		for(let key of Object.keys(user)) {
			if(this[key] !== user[key]) this[key] = user[key];
		}
		if(!this.activeCompany && this.companies.length > 0) {
			this.activeCompany = this.companies[0].company.id;
		}
	}

	@action
	unsetUser() {
		this.id = undefined;
		this.email = undefined;
		this.person = undefined;
		this.companies = undefined;
	}

	@computed get isLoggedIn(): boolean {
		return !!this.email;
	}

}