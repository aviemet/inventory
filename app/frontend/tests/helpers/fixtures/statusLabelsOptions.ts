export const baseStatusLabelsOptionsFixture: Schema.StatusLabelsOptions = {
	id: 1,
	name: "Test Status",
	slug: "test-status",
	status_type: "deployable",
}

export const createStatusLabelsOptionsFixture = (overrides?: Partial<Schema.StatusLabelsOptions>): Schema.StatusLabelsOptions => ({
	...baseStatusLabelsOptionsFixture,
	...overrides,
})
