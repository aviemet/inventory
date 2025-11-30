export const baseManufacturersOptionsFixture: Schema.ManufacturersOptions = {
	id: 1,
	name: "Test Manufacturer",
	slug: "test-manufacturer",
}

export const createManufacturersOptionsFixture = (overrides?: Partial<Schema.ManufacturersOptions>): Schema.ManufacturersOptions => ({
	...baseManufacturersOptionsFixture,
	...overrides,
})
