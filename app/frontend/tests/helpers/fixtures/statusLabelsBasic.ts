export const baseStatusLabelsBasicFixture: Schema.StatusLabelsBasic = {
	id: 1,
	name: "Test Status",
	slug: "test-status",
	status_type: "deployable",
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createStatusLabelsBasicFixture = (overrides?: Partial<Schema.StatusLabelsBasic>): Schema.StatusLabelsBasic => ({
	...baseStatusLabelsBasicFixture,
	...overrides,
})
