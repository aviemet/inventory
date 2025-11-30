export const baseManufacturerFixture: Schema.Manufacturer = {
	id: 1,
	name: "Test Manufacturer",
}

export const createManufacturerFixture = (overrides?: Partial<Schema.Manufacturer>): Schema.Manufacturer => ({
	...baseManufacturerFixture,
	...overrides,
})

export const minimalManufacturerFixture: Schema.Manufacturer = {
	id: 1,
	name: "Test Manufacturer",
}
