export const baseCategoriesOptionsFixture: Schema.CategoriesOptions = {
	id: 1,
	name: "Test Category",
	category_with_type: "Test Category (Item)",
	slug: "test-category",
}

export const createCategoriesOptionsFixture = (overrides?: Partial<Schema.CategoriesOptions>): Schema.CategoriesOptions => ({
	...baseCategoriesOptionsFixture,
	...overrides,
})
