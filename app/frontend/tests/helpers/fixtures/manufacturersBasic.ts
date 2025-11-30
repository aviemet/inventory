export const baseManufacturersBasicFixture: Schema.ManufacturersBasic = {
	id: 1,
	name: "Test Manufacturer",
	slug: "test-manufacturer",
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createManufacturersBasicFixture = (overrides?: Partial<Schema.ManufacturersBasic>): Schema.ManufacturersBasic => ({
	...baseManufacturersBasicFixture,
	...overrides,
})
