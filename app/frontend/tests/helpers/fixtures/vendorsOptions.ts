export const baseVendorsOptionsFixture: Schema.VendorsOptions = {
	id: 1,
	name: "Test Vendor",
	slug: "test-vendor",
}

export const createVendorsOptionsFixture = (overrides?: Partial<Schema.VendorsOptions>): Schema.VendorsOptions => ({
	...baseVendorsOptionsFixture,
	...overrides,
})
