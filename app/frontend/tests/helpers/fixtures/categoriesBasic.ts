export const baseCategoriesBasicFixture: Schema.CategoriesBasic = {
	id: 1,
	name: "Test Category",
	categorizable_type: "Item",
	plural: "items",
	slug: "test-category",
	qty: 0,
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createCategoriesBasicFixture = (overrides?: Partial<Schema.CategoriesBasic>): Schema.CategoriesBasic => ({
	...baseCategoriesBasicFixture,
	...overrides,
})
