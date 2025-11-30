const baseAddressCategory: Schema.CategoriesOptions = {
	id: 1,
	name: "Home",
	category_with_type: "Home (Address)",
	slug: "home",
}

export const baseAddressFixture: Schema.Address = {
	id: 1,
	address: "123 Main St",
	city: "New York",
	region: "NY",
	postal: "10001",
	country: "US",
	category_id: 1,
	contact_id: 1,
	category: baseAddressCategory,
}

export const createAddressFixture = (overrides?: Partial<Schema.Address>): Schema.Address => {
	return {
		...baseAddressFixture,
		...overrides,
		category: {
			...baseAddressCategory,
			...overrides?.category,
		},
	}
}

export const minimalAddressFixture: Schema.Address = {
	id: 1,
	address: "123 Main St",
	category_id: 1,
	contact_id: 1,
	category: baseAddressCategory,
}
