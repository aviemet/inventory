export const baseLocationsOptionsFixture: Schema.LocationsOptions = {
	id: 1,
	name: "Test Location",
}

export const createLocationsOptionsFixture = (overrides?: Partial<Schema.LocationsOptions>): Schema.LocationsOptions => ({
	...baseLocationsOptionsFixture,
	...overrides,
})
