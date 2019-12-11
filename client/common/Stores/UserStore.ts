import { observable, computed, action, extendObservable } from 'mobx';

export default class UserStore {
	@observable id: string;
	@observable email: string;
	@observable person: PersonType;
	@observable companies: Array<UserCompanyType>;
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

	@computed get shortName(): string {
		if(this.person && this.person.firstName && this.person.lastName) {
			return `${this.person.firstName[0]}${this.person.lastName[0]}`.toUpperCase();
		}
		return this.email.replace(/[^a-zA-z]/g, '')[0].toUpperCase();
	}

	@action 
	addCompany(company) {
		console.log({ company });
		this.companies.push(company);

		if(!this.activeCompany) {
			this.activeCompany = company.id;
		}
	}

	@computed get getActiveCompany(): CompanyType {
		const activeCompany = this.companies.find(company => company.company.id === this.activeCompany);
		if(this.activeCompany) {
			return activeCompany.company;
		}
		return null;
	}
}

interface UserCompanyType {
	company: CompanyType,
	role: {
		id: string,
		name: string
	}
}

interface CompanyType {
	id: string,
	name: string
}

interface PersonType {
	firstName: string,
	lastName: string,
	contact: object
}