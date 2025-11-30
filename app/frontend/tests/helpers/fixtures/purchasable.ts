export const basePurchasableFixture: Schema.Purchasable = {
	id: 1,
	name: "Test Purchasable",
}

export const createPurchasableFixture = (overrides?: Partial<Schema.Purchasable>): Schema.Purchasable => ({
	...basePurchasableFixture,
	...overrides,
})
