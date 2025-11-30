export const baseLocationsBasicFixture: Schema.LocationsBasic = {
	id: 1,
	name: "Test Location",
	slug: "test-location",
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
	parent: {
		id: 1,
		name: "Test Location",
		slug: "test-location",
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
	},
}

export const createLocationsBasicFixture = (overrides?: Partial<Schema.LocationsBasic>): Schema.LocationsBasic => ({
	...baseLocationsBasicFixture,
	...overrides,
})
