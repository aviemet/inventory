const categoryBase = {
	name: "Test Category",
	categorizable_type: "Item",
}

export const baseCategoriesIndexFixture: Schema.CategoriesIndex = {
	...categoryBase,
	id: 1,
	plural: "items",
	slug: "test-category",
	qty: 5,
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createCategoriesIndexFixture = (overrides?: Partial<Schema.CategoriesIndex>): Schema.CategoriesIndex => ({
	...baseCategoriesIndexFixture,
	...overrides,
})

export const baseCategoriesFormDataFixture: Schema.CategoriesFormData = {
	...categoryBase,
}

export const createCategoriesFormDataFixture = (overrides?: Partial<Schema.CategoriesFormData>): Schema.CategoriesFormData => ({
	...baseCategoriesFormDataFixture,
	...overrides,
})

export const baseCategoriesEditFixture: Schema.CategoriesEdit = {
	...categoryBase,
	id: 1,
	slug: "test-category",
}

export const createCategoriesEditFixture = (overrides?: Partial<Schema.CategoriesEdit>): Schema.CategoriesEdit => ({
	...baseCategoriesEditFixture,
	...overrides,
})

export const baseCategoriesShowFixture: Schema.CategoriesShow = {
	...categoryBase,
	id: 1,
	plural: "items",
	slug: "test-category",
	qty: 5,
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createCategoriesShowFixture = (overrides?: Partial<Schema.CategoriesShow>): Schema.CategoriesShow => ({
	...baseCategoriesShowFixture,
	...overrides,
})
