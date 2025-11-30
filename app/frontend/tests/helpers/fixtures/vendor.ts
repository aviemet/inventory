export const baseVendorFixture: Schema.Vendor = {
	id: 1,
	name: "Test Vendor",
}

export const createVendorFixture = (overrides?: Partial<Schema.Vendor>): Schema.Vendor => ({
	...baseVendorFixture,
	...overrides,
})

export const minimalVendorFixture: Schema.Vendor = {
	id: 1,
	name: "Test Vendor",
}
