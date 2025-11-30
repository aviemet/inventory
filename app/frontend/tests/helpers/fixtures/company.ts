export const baseCompanyFixture: Schema.Company = {
	id: 1,
	name: "Test Company",
	default_currency: "USD",
	settings: {},
}

export const createCompanyFixture = (overrides?: Partial<Schema.Company>): Schema.Company => ({
	...baseCompanyFixture,
	...overrides,
})

export const minimalCompanyFixture: Schema.Company = {
	id: 1,
	name: "Test Company",
	default_currency: "USD",
	settings: {},
}
