export const baseLocationFixture: Schema.Location = {
	id: 1,
	name: "Test Location",
}

export const createLocationFixture = (overrides?: Partial<Schema.Location>): Schema.Location => ({
	...baseLocationFixture,
	...overrides,
})

export const minimalLocationFixture: Schema.Location = {
	id: 1,
	name: "Test Location",
}
