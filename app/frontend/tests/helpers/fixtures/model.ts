export const baseModelFixture: Schema.Model = {
	id: 1,
	name: "Test Model",
	category_id: 1,
	manufacturer_id: 1,
}

export const createModelFixture = (overrides?: Partial<Schema.Model>): Schema.Model => ({
	...baseModelFixture,
	...overrides,
})

export const minimalModelFixture: Schema.Model = {
	id: 1,
	name: "Test Model",
	category_id: 1,
	manufacturer_id: 1,
}
