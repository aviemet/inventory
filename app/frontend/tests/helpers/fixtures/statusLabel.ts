export const baseStatusLabelFixture: Schema.StatusLabel = {
	id: 1,
	name: "Test Status",
	status_type: "deployable",
}

export const createStatusLabelFixture = (overrides?: Partial<Schema.StatusLabel>): Schema.StatusLabel => ({
	...baseStatusLabelFixture,
	...overrides,
})

export const minimalStatusLabelFixture: Schema.StatusLabel = {
	id: 1,
	name: "Test Status",
	status_type: "deployable",
}
