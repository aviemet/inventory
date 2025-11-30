export const baseVendorsBasicFixture: Schema.VendorsBasic = {
	id: 1,
	name: "Test Vendor",
	slug: "test-vendor",
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createVendorsBasicFixture = (overrides?: Partial<Schema.VendorsBasic>): Schema.VendorsBasic => ({
	...baseVendorsBasicFixture,
	...overrides,
})
