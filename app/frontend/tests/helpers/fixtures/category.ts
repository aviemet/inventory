export const baseCategoryFixture: Schema.Category = {
	id: 1,
	name: "Test Category",
	categorizable_type: "Item",
}

export const createCategoryFixture = (overrides?: Partial<Schema.Category>): Schema.Category => ({
	...baseCategoryFixture,
	...overrides,
})

export const minimalCategoryFixture: Schema.Category = {
	id: 1,
	name: "Test Category",
	categorizable_type: "Item",
}
