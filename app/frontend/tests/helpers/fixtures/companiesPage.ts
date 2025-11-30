import { createCompanyFixture } from "./company"

const companyBase = {
	name: "Test Company",
	default_currency: "USD",
	settings: {},
}

export const baseCompaniesIndexFixture: Schema.CompaniesIndex = {
	...companyBase,
	id: 1,
	slug: "test-company",
	counts: {
		locations: 0,
		items: 0,
		accessories: 0,
		consumables: 0,
		components: 0,
		departments: 0,
		licenses: 0,
		contracts: 0,
		people: 0,
		vendors: 0,
		manufacturers: 0,
	},
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createCompaniesIndexFixture = (overrides?: Partial<Schema.CompaniesIndex>): Schema.CompaniesIndex => ({
	...baseCompaniesIndexFixture,
	...overrides,
})

export const baseCompaniesFormDataFixture: Schema.CompaniesFormData = {
	...companyBase,
	contact: {
		addresses: [],
		emails: [],
		phones: [],
		websites: [],
	},
}

export const createCompaniesFormDataFixture = (overrides?: Partial<Schema.CompaniesFormData>): Schema.CompaniesFormData => ({
	...baseCompaniesFormDataFixture,
	...overrides,
})

export const baseCompaniesEditFixture: Schema.CompaniesEdit = {
	...companyBase,
	id: 1,
	slug: "test-company",
	contact: {
		addresses: [],
		emails: [],
		phones: [],
		websites: [],
	},
}

export const createCompaniesEditFixture = (overrides?: Partial<Schema.CompaniesEdit>): Schema.CompaniesEdit => ({
	...baseCompaniesEditFixture,
	...overrides,
})

export const baseCompaniesShowFixture: Schema.CompaniesShow = {
	...companyBase,
	id: 1,
	slug: "test-company",
	counts: {
		locations: 0,
		items: 0,
		accessories: 0,
		consumables: 0,
		components: 0,
		departments: 0,
		licenses: 0,
		contracts: 0,
		people: 0,
		vendors: 0,
		manufacturers: 0,
	},
	contact: {
		id: 1,
		addresses: [],
		emails: [],
		phones: [],
		websites: [],
	},
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createCompaniesShowFixture = (overrides?: Partial<Schema.CompaniesShow>): Schema.CompaniesShow => ({
	...baseCompaniesShowFixture,
	...overrides,
})
