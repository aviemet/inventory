export const baseModelsOptionsFixture: Schema.ModelsOptions = {
	id: 1,
	name: "Test Model",
	slug: "test-model",
}

export const createModelsOptionsFixture = (overrides?: Partial<Schema.ModelsOptions>): Schema.ModelsOptions => ({
	...baseModelsOptionsFixture,
	...overrides,
})
